import { ThemeSwitch } from "../theme";
import { Container } from "./container";
import Link from "next/link";
import { homePath } from "@/paths";

export default function Header() {
  return (
    <header className="relative py-2">
      <Container>
        <div className="flex justify-between items-center">
          <div className="">
            <Link
              href={homePath()}
              className="font-black tracking-wider text-xl underline"
            >
              BDSTORE
            </Link>
          </div>
          <div className="">
            <ThemeSwitch />
          </div>
        </div>
      </Container>
    </header>
  );
}
