import React from "react";
import { DONATION_OPTIONS, DonationOption } from "@/mock/home-donations.data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

interface Props {
  selectedId: string;
  isOneCol?: boolean;
  onSelect: (id: string) => void;
}

const ProjectSelection: React.FC<Props> = ({
  selectedId,
  onSelect,
  isOneCol = false,
}) => {
  return (
    <div className={`${isOneCol ? "w-full" : "w-full lg:w-5/12"}`}>
      <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 h-full">
        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
          <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-3 text-sm shadow-md">
            1
          </span>
          Chọn Quỹ Quyên Góp
        </h3>

        <div className="space-y-4 max-h-125 overflow-y-auto pr-2 custom-scroll">
          {DONATION_OPTIONS.map((option: DonationOption) => (
            <label
              key={option.id}
              className="cursor-pointer relative block group"
            >
              <input
                type="radio"
                name="project"
                value={option.id}
                checked={selectedId === option.id}
                onChange={() => onSelect(option.id)}
                className="peer sr-only"
              />
              <div
                className={`p-4 rounded-xl border-2 ${
                  selectedId === option.id
                    ? "border-primary bg-red-50/30"
                    : "border-gray-100"
                } ${
                  option.colors.border
                } transition-all flex items-center gap-4 bg-white`}
              >
                <div
                  className={`icon-box w-12 h-12 rounded-full flex items-center justify-center transition-colors ${option.colors.bg} ${option.colors.text}`}
                >
                  <FontAwesomeIcon icon={option.icon} className="text-xl" />
                </div>
                <div className="flex-1">
                  <h4
                    className={`font-bold text-lg ${
                      selectedId === option.id
                        ? "text-primary"
                        : "text-gray-800"
                    }`}
                  >
                    {option.title}
                  </h4>
                  <p className="text-xs text-gray-500">{option.description}</p>
                </div>
                {selectedId === option.id && (
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary text-2xl animate-scale-in"
                  />
                )}
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSelection;
