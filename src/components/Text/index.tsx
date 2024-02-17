import React from "react";

const sizeClasses = {
  txtRubikRomanRegular20: "font-normal font-rubik",
  txtRubikRomanSemiBold35: "font-rubik font-semibold",
  txtKrubLight20: "font-krub font-light",
  txtInterSemiBold24: "font-inter font-semibold",
  txtKrubMedium20: "font-krub font-medium",
  txtInterMedium16Bluegray30001: "font-inter font-medium",
  txtRubikRomanBold60: "font-bold font-rubik",
  txtKrubSemiBold20: "font-krub font-semibold",
  txtKrubBold144: "font-bold font-krub",
  txtKrubMedium18: "font-krub font-medium",
  txtInterRegular16Bluegray700: "font-inter font-normal",
  txtKrubRegular18: "font-krub font-normal",
  txtKrubSemiBold20Yellow700: "font-krub font-semibold",
  txtRubikRomanRegular96: "font-normal font-rubik",
  txtKrubRegular16: "font-krub font-normal",
  txtKrubRegular16Bluegray700: "font-krub font-normal",
  txtKrubMedium16: "font-krub font-medium",
  txtKrubRegular36: "font-krub font-normal",
  txtKrubMedium14: "font-krub font-medium",
  txtRubikRomanSemiBold24: "font-rubik font-semibold",
  txtInterRegular16WhiteA700: "font-inter font-normal",
  txtInterSemiBold18: "font-inter font-semibold",
  txtInterMedium16: "font-inter font-medium",
  txtInterSemiBold16: "font-inter font-semibold",
  txtKrubBold36: "font-bold font-krub",
  txtKrubBold12: "font-bold font-krub",
  txtInterSemiBold20: "font-inter font-semibold",
  txtKrubSemiBold12: "font-krub font-semibold",
  txtKrubSemiBold36: "font-krub font-semibold",
  txtInterMedium16Bluegray400: "font-inter font-medium",
  txtRubikRomanRegular14: "font-normal font-rubik",
  txtKrubSemiBold20Gray90002: "font-krub font-semibold",
  txtKrubSemiBold16: "font-krub font-semibold",
  txtInterRegular16: "font-inter font-normal",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
