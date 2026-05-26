import { redirect } from "next/navigation";

export default function PhysicsPage() {
  redirect("/analysis?subject=physics");
}
