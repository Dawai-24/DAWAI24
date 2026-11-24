
"use client";

import { useEffect, useRef, useState } from "react";
import {
  Pencil,
  X,
  Plus,
  Trash2,
  Save,
  Image as ImageIcon,
  Layers3,
  Upload,
} from "lucide-react";

import {
  updateCategory,
  createSubcategory,
  updateSubcategory,
  deleteSubcategory,
} from "@/app/admin/actions";

// Reusable image URL + local upload field
function ImageUploadField({ currentUrl = "", inputName = "image" }) {
  const fileRef = useRef(null);
  const [preview, setPreview] = useState(currentUrl);

  useEffect(() => {
    setPreview(currentUrl);
  }, [currentUrl]);

  useEffect(() => {
    return () => {
      if (preview?.startsWith("blob:")) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  function handleFileChange(event) {
    const file = event.target.files?.[0];

    if (!file) return;

    const allowed = ["image/jpeg", "image/png", "image/webp"];

    if (!allowed.includes(file.type)) {
      alert("Only JPG, PNG and WEBP images are allowed.");
      event.target.value = "";
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Image size must be less than 5MB.");
      event.target.value = "";
      return;
    }

    setPreview(URL.createObjectURL(file));
  }

  return (
    <div className="space-y-3">
      <input
        name="imageUrl"
        defaultValue={currentUrl}
        placeholder="Paste image URL (optional)"
        className="h-11 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-[#7b2cbf]"
      />

      <input
        ref={fileRef}
        type="file"
        name={inputName}
        accept="image/jpeg,image/png,image/webp"
        onChange={handleFileChange}
        className="hidden"
      />

      <div className="flex flex-wrap items-center gap-3">
        {preview ? (
          <img
            src={preview}
            alt="Image preview"
            className="size-16 rounded-xl border border-slate-200 object-cover"
          />
        ) : (
          <div className="grid size-16 place-items-center rounded-xl border border-dashed border-slate-300 bg-slate-50">
            <ImageIcon className="text-slate-400" size={23} />
          </div>
        )}

        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          className="inline-flex h-10 items-center gap-2 rounded-xl border border-violet-200 bg-violet-50 px-4 text-sm font-bold text-[#7b2cbf] hover:bg-violet-100"
        >
          <Upload size={16} />
          Upload New Image
        </button>

        <span className="text-xs text-slate-400">
          JPG, PNG, WEBP · Max 5MB
        </span>
      </div>
    </div>
  );
}

export default function CategoryRowActions({ category }) {
  const [open, setOpen] = useState(false);
  const [editingSubcategory, setEditingSubcategory] = useState(null);
  const [addingSubcategory, setAddingSubcategory] = useState(false);

  function closeCategoryModal() {
    setOpen(false);
    setEditingSubcategory(null);
    setAddingSubcategory(false);
  }

  const subcategories = category.subcategories || [];

  return (
    <>
      {/* EDIT CATEGORY BUTTON */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        title="Edit Category"
        className="grid size-9 place-items-center rounded-lg border border-violet-100 text-[#7b2cbf] transition hover:bg-violet-50"
      >
        <Pencil size={16} />
      </button>

      {/* CATEGORY EDIT MODAL */}
      {open && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              closeCategoryModal();
            }
          }}
        >
          <div className="flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">

            {/* HEADER */}
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
              <div>
                <h2 className="text-xl font-extrabold text-slate-900">
                  Edit Category
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Update category details and manage subcategories.
                </p>
              </div>

              <button
                type="button"
                onClick={closeCategoryModal}
                className="grid size-9 place-items-center rounded-lg bg-slate-100 text-slate-500 hover:bg-red-50 hover:text-red-600"
              >
                <X size={19} />
              </button>
            </div>

            {/* SCROLLABLE CONTENT */}
            <div className="overflow-y-auto p-6">

              {/* CATEGORY DETAILS */}
              <section>
                <div className="mb-4 flex items-center gap-2">
                  <ImageIcon size={18} className="text-[#7b2cbf]" />
                  <h3 className="font-bold text-slate-800">
                    Category Details
                  </h3>
                </div>

                <form action={updateCategory} className="space-y-4">
                  <input
                    type="hidden"
                    name="id"
                    value={category.id}
                  />

                  <div>
                    <label className="text-sm font-semibold text-slate-700">
                      Category Name *
                    </label>
                    <input
                      name="name"
                      defaultValue={category.name}
                      required
                      className="mt-1.5 h-11 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-[#7b2cbf]"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-slate-700">
                      URL Slug *
                    </label>
                    <input
                      name="slug"
                      defaultValue={category.slug}
                      required
                      className="mt-1.5 h-11 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-[#7b2cbf]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Category Image
                    </label>
                    <ImageUploadField
                      currentUrl={category.imageUrl || ""}
                    />
                  </div>

                  <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <input
                      type="checkbox"
                      name="active"
                      defaultChecked={category.active}
                      className="size-4 accent-[#7b2cbf]"
                    />
                    Active Category
                  </label>

                  <div className="flex justify-end border-b border-slate-100 pb-6">
                    <button
                      type="submit"
                      className="inline-flex h-10 items-center gap-2 rounded-xl bg-[#7b2cbf] px-5 text-sm font-bold text-white hover:bg-[#6821a5]"
                    >
                      <Save size={16} />
                      Save Category
                    </button>
                  </div>
                </form>
              </section>

              {/* SUBCATEGORY MANAGEMENT */}
              <section className="pt-6">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Layers3 size={18} className="text-[#7b2cbf]" />
                    <h3 className="font-bold text-slate-800">
                      Manage Subcategories
                    </h3>
                  </div>

                  <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-bold text-[#7b2cbf]">
                    {subcategories.length} Types
                  </span>
                </div>

                {/* SUBCATEGORY LIST */}
                <div className="space-y-3">
                  {subcategories.length > 0 ? (
                    subcategories.map((sub) => (
                      <div
                        key={sub.id}
                        className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-3"
                      >
                        <div className="flex min-w-0 items-center gap-3">
                          {sub.imageUrl ? (
                            <img
                              src={sub.imageUrl}
                              alt={sub.name}
                              className="size-12 shrink-0 rounded-lg border object-cover"
                            />
                          ) : (
                            <div className="grid size-12 shrink-0 place-items-center rounded-lg bg-violet-50">
                              <ImageIcon
                                size={20}
                                className="text-violet-400"
                              />
                            </div>
                          )}

                          <div className="min-w-0">
                            <p className="truncate text-sm font-bold text-slate-800">
                              {sub.name}
                            </p>
                            <p className="text-xs text-slate-400">
                              Subcategory
                            </p>
                          </div>
                        </div>

                        <div className="flex shrink-0 items-center gap-2">
                          <button
                            type="button"
                            onClick={() => setEditingSubcategory(sub)}
                            className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-violet-200 px-3 text-xs font-bold text-[#7b2cbf] hover:bg-violet-50"
                          >
                            <Pencil size={14} />
                            Edit
                          </button>

                          <form action={deleteSubcategory}>
                            <input
                              type="hidden"
                              name="id"
                              value={sub.id}
                            />

                            <button
                              type="submit"
                              title="Delete Subcategory"
                              className="grid size-9 place-items-center rounded-lg text-red-500 hover:bg-red-50"
                            >
                              <Trash2 size={16} />
                            </button>
                          </form>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="rounded-xl border border-dashed border-slate-300 p-6 text-center">
                      <Layers3
                        size={28}
                        className="mx-auto text-slate-300"
                      />
                      <p className="mt-2 text-sm font-semibold text-slate-600">
                        No subcategories added yet
                      </p>
                    </div>
                  )}
                </div>

                {/* ADD SUBCATEGORY - BUTTON ONLY */}
                <div className="mt-5 rounded-xl border border-violet-100 bg-violet-50/50 p-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h4 className="text-sm font-bold text-slate-800">
                        Add New Subcategory
                      </h4>
                      <p className="mt-1 text-xs text-slate-500">
                        Add a new type to this category.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setAddingSubcategory(true)}
                      className="inline-flex h-10 items-center gap-2 rounded-xl bg-[#7b2cbf] px-4 text-sm font-bold text-white transition hover:bg-[#6821a5]"
                    >
                      <Plus size={17} />
                      Add Subcategory
                    </button>
                  </div>
                </div>
              </section>
            </div>

            {/* FOOTER */}
            <div className="flex justify-end border-t border-slate-100 bg-white px-6 py-4">
              <button
                type="button"
                onClick={closeCategoryModal}
                className="h-10 rounded-xl border border-slate-200 px-5 text-sm font-bold text-slate-600 hover:bg-slate-50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ADD SUBCATEGORY POPUP */}
      {open && addingSubcategory && (
        <div
          className="fixed inset-0 z-[130] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              setAddingSubcategory(false);
            }
          }}
        >
          <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl">

            {/* POPUP HEADER */}
            <div className="flex items-center justify-between border-b border-slate-100 p-5">
              <div>
                <h3 className="text-lg font-extrabold text-slate-900">
                  Add New Subcategory
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  Category: {category.name}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setAddingSubcategory(false)}
                className="grid size-9 place-items-center rounded-lg bg-slate-100 text-slate-500 hover:bg-red-50 hover:text-red-600"
              >
                <X size={18} />
              </button>
            </div>

            {/* ADD FORM */}
            <form
              action={createSubcategory}
              className="space-y-4 p-5"
            >
              <input
                type="hidden"
                name="categoryId"
                value={category.id}
              />

              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Subcategory Name *
                </label>
                <input
                  name="name"
                  required
                  placeholder="Enter subcategory name"
                  className="mt-1.5 h-11 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-[#7b2cbf]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Subcategory Image
                </label>
                <ImageUploadField />
              </div>

              <div className="flex justify-end gap-3 border-t border-slate-100 pt-4">
                <button
                  type="button"
                  onClick={() => setAddingSubcategory(false)}
                  className="h-10 rounded-xl border border-slate-200 px-4 text-sm font-bold text-slate-600 hover:bg-slate-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="inline-flex h-10 items-center gap-2 rounded-xl bg-[#7b2cbf] px-5 text-sm font-bold text-white hover:bg-[#6821a5]"
                >
                  <Plus size={16} />
                  Create Subcategory
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* EDIT SUBCATEGORY POPUP */}
      {open && editingSubcategory && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              setEditingSubcategory(null);
            }
          }}
        >
          <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl">

            <div className="flex items-center justify-between border-b border-slate-100 p-5">
              <div>
                <h3 className="text-lg font-extrabold text-slate-900">
                  Edit Subcategory
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  Update name and image.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setEditingSubcategory(null)}
                className="grid size-9 place-items-center rounded-lg bg-slate-100 text-slate-500 hover:bg-red-50 hover:text-red-600"
              >
                <X size={18} />
              </button>
            </div>

            <form
              action={updateSubcategory}
              className="space-y-4 p-5"
            >
              <input
                type="hidden"
                name="id"
                value={editingSubcategory.id}
              />

              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Subcategory Name *
                </label>
                <input
                  name="name"
                  defaultValue={editingSubcategory.name}
                  required
                  className="mt-1.5 h-11 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-[#7b2cbf]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Subcategory Image
                </label>
                <ImageUploadField
                  currentUrl={editingSubcategory.imageUrl || ""}
                />
              </div>

              <div className="flex justify-end gap-3 border-t border-slate-100 pt-4">
                <button
                  type="button"
                  onClick={() => setEditingSubcategory(null)}
                  className="h-10 rounded-xl border border-slate-200 px-4 text-sm font-bold text-slate-600"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="inline-flex h-10 items-center gap-2 rounded-xl bg-[#7b2cbf] px-5 text-sm font-bold text-white hover:bg-[#6821a5]"
                >
                  <Save size={16} />
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
