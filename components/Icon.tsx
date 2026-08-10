"use client";

import {
  Cake,
  Cookie,
  Coffee,
  Bread,
  CookingPot,
  Storefront,
  SealCheck,
  Broadcast,
  HandHeart,
  UsersThree,
  PaintBrush,
  type IconProps,
} from "@phosphor-icons/react";
import { ComponentType } from "react";

const MAP: Record<string, ComponentType<IconProps>> = {
  BirthdayCake: Cake,
  Cookie,
  Coffee,
  BreadLoaf: Bread,
  CookingPot,
  Storefront,
  SealCheck,
  Broadcast,
  HandHeart,
  UsersThree,
  PaintBrush,
};

export default function Icon({
  name,
  ...props
}: { name: string } & IconProps) {
  const Cmp = MAP[name] ?? Cake;
  return <Cmp {...props} />;
}
