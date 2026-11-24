
"use client";

import { useState, useRef, useEffect } from "react";
import { createCategory } from "@/app/admin/actions";
import { Plus, X, ImageIcon, Upload, Trash2 } from "lucide-react";

export default function CategoryControls({
  total,
  active,
  hidden,
  withTypes,
  selected = "all",
}) {
  const [open, setOpen] = useState(false);
  const [preview, setPreview] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const fileInputRef = useRef(null);

  const filters = [
    { id: "all", label: "Total", value: total },
    { id: "active", label: "Active", value: active },
    { id: "hidden", label: "Hidden", value: hidden },
    { id: "types", label: "With Types", value: withTypes },
  ];

  // Clean up temporary preview URL
  useEffect(() => {
    return () => {
      if (preview.startsWith("blob:")) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const allowedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/webp",
    ];

    if (!allowedTypes.includes(file.type)) {
      alert("Please select JPG, PNG or WEBP image.");
      e.target.value = "";
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Image size should be less than 5MB.");
      e.target.value = "";
      return;
    }

    if (preview.startsWith("blob:")) {
      URL.revokeObjectURL(preview);
    }

    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const removeImage = () => {
    setImageFile(null);

    if (preview.startsWith("blob:")) {
      URL.revokeObjectURL(preview);
    }

    setPreview("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const closeModal = () => {
    setOpen(false);
    removeImage();
  };

  return (
    <>
      {/* HEADER */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-medium text-[#7b2cbf]">
            Store Management
          </p>

          <h1 className="mt-1 text-2xl font-extrabold">
            Shop Categories
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage your store categories and types.
          </p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#7b2cbf] px-5 text-sm font-bold text-white shadow-sm hover:bg-[#6821a5]"
        >
          <Plus size={18} />
          Add Category
        </button>
      </div>

      {/* CATEGORY FILTERS */}
      <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
        {filters.map((item) => (
          <a
            key={item.id}
            href={`/admin/categories?filter=${item.id}`}
            className={`rounded-2xl border p-5 transition hover:-translate-y-0.5 hover:shadow-md ${
              selected === item.id
                ? "border-[#7b2cbf] bg-violet-50"
                : "border-slate-200 bg-white"
            }`}
          >
            <p className="text-sm font-semibold text-slate-500">
              {item.label}
            </p>

            <p className="mt-2 text-3xl font-extrabold text-slate-900">
              {item.value}
            </p>

            <p className="mt-1 text-xs text-slate-400">
              {item.label === "Total"
                ? "All categories"
                : item.label === "Active"
                ? "Visible categories"
                : item.label === "Hidden"
                ? "Inactive categories"
                : "Categories with subcategories"}
            </p>
          </a>
        ))}
      </div>

      {/* ADD CATEGORY MODAL */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl">

            {/* MODAL HEADER */}
            <div className="flex items-center justify-between border-b border-slate-100 p-5">
              <div>
                <h2 className="text-xl font-extrabold">
                  Add New Category
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Add a new category to your storefront.
                </p>
              </div>

              <button
                type="button"
                onClick={closeModal}
                className="grid size-9 place-items-center rounded-lg bg-slate-100 text-slate-500 hover:bg-red-50 hover:text-red-600"
              >
                <X size={19} />
              </button>
            </div>

            {/* CATEGORY FORM */}
            <form
              action={createCategory}
              className="space-y-4 p-5"
            >
              {/* CATEGORY NAME */}
              <div>
                <label className="text-sm font-bold text-slate-700">
                  Category Name *
                </label>

                <input
                  name="name"
                  placeholder="e.g. Personal Care"
                  required
                  className="mt-1.5 h-11 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-[#7b2cbf]"
                />
              </div>

              {/* SLUG */}
              <div>
                <label className="text-sm font-bold text-slate-700">
                  URL Slug
                </label>

                <input
                  name="slug"
                  placeholder="Created automatically"
                  className="mt-1.5 h-11 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-[#7b2cbf]"
                />
              </div>

              {/* CATEGORY IMAGE */}
              <div>
                <label className="text-sm font-bold text-slate-700">
                  Category Image
                </label>

                <div className="mt-1.5 flex flex-col gap-2 sm:flex-row">
                  {/* IMAGE URL INPUT */}
                  <div className="relative min-w-0 flex-1">
                    <ImageIcon
                      size={17}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      name="imageUrl"
                      placeholder="Paste image URL"
                      className="h-11 w-full rounded-xl border border-slate-200 pl-10 pr-3 text-sm outline-none focus:border-[#7b2cbf]"
                    />
                  </div>

                  {/* UPLOAD BUTTON */}
                  <input
                    ref={fileInputRef}
                    type="file"
                    name="image"
                    accept="image/jpeg,image/jpg,image/png,image/webp"
                    onChange={handleImageChange}
                    className="hidden"
                  />

                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl border border-[#7b2cbf] bg-violet-50 px-4 text-sm font-bold text-[#7b2cbf] transition hover:bg-violet-100"
                  >
                    <Upload size={17} />
                    Upload Image
                  </button>
                </div>

                <p className="mt-2 text-xs text-slate-400">
                  JPG, PNG or WEBP. Maximum size 5MB.
                </p>

                {/* IMAGE PREVIEW */}
                {preview && (
                  <div className="mt-3 flex items-center gap-3 rounded-xl border border-slate-200 p-3">
                    <img
                      src={preview}
                      alt="Category preview"
                      className="size-16 rounded-lg border border-slate-200 object-cover"
                    />

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-slate-700">
                        {imageFile?.name}
                      </p>

                      <p className="text-xs text-slate-400">
                        {imageFile
                          ? `${(imageFile.size / 1024).toFixed(0)} KB`
                          : ""}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={removeImage}
                      className="grid size-9 shrink-0 place-items-center rounded-lg text-red-500 hover:bg-red-50"
                      title="Remove image"
                    >
                      <Trash2 size={17} />
                    </button>
                  </div>
                )}
              </div>

              {/* FORM BUTTONS */}
              <div className="flex justify-end gap-3 border-t border-slate-100 pt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="h-11 rounded-xl border border-slate-200 px-5 text-sm font-bold text-slate-600 hover:bg-slate-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="inline-flex h-11 items-center gap-2 rounded-xl bg-[#7b2cbf] px-5 text-sm font-bold text-white hover:bg-[#6821a5]"
                >
                  <Plus size={17} />
                  Create Category
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
