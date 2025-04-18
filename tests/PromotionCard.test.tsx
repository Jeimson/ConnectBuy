import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/jest-globals";
import PromotionCard from "../src/components/PromotionCard";
//import { Promotion } from "../src/types/types";
import { Promotion } from "@/types/types";

const mockPromotion: Promotion = {
  id: 1,
  title: "Test Promotion",
  description: "Test Description",
  category: "test",
  store: "Test Store",
  distance: 5,
  isSpecial: true,
  imageUrl: "https://test.com/image.jpg",
  expirationDate: "2025-12-31",
};

describe("PromotionCard", () => {
  it("renders promotion data correctly", () => {
    render(<PromotionCard promotion={mockPromotion} />);

    expect(screen.getByText(mockPromotion.title)).toBeInTheDocument();
    expect(screen.getByText(mockPromotion.description)).toBeInTheDocument();
    expect(screen.getByText(mockPromotion.category)).toBeInTheDocument();
    expect(
      screen.getByText(`${mockPromotion.distance} km`)
    ).toBeInTheDocument();
    expect(screen.getByText("Especial")).toBeInTheDocument();
  });

  it("does not show special chip when promotion is not special", () => {
    const normalPromotion = { ...mockPromotion, isSpecial: false };
    render(<PromotionCard promotion={normalPromotion} />);

    expect(screen.queryByText("Especial")).not.toBeInTheDocument();
  });
});
