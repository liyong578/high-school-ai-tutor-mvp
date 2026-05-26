import { redirect } from "next/navigation";

export default function ChemistryPage() {
  redirect("/analysis?subject=chemistry");
}
