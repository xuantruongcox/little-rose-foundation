// src/components/volunteer/VolunteerSection.tsx
"use client";
import React from "react";
import { useVolunteerForm } from "@/hooks/useVolunteerForm";
import { VolunteerBanner } from "./Banner";
import { VolunteerForm } from "./Form";
import { VolunteerSuccess } from "./Success";

const VolunteerSection = () => {
  // Controller
  const { formData, status, handleChange, handleSubmit, resetForm } =
    useVolunteerForm();

  return (
    <section className="py-20 bg-primary/5" id="volunteer">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
          <VolunteerBanner />

          <div className="lg:w-1/2 p-10 lg:p-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              {status === "success" ? "Hoàn tất đăng ký" : "Đăng Ký Thành Viên"}
            </h3>

            {status === "success" ? (
              <VolunteerSuccess onReset={resetForm} />
            ) : (
              <VolunteerForm
                formData={formData}
                isLoading={status === "loading"}
                onChange={handleChange}
                onSubmit={handleSubmit}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;
