import { navItems } from "@/data/nav-data";
import { ActiveRoute } from "./active-route";

export function DesktopNav() {
  return (
    <nav>
      <ul className="flex gap-4">
        {navItems.map((item) => (
          <li key={item.href}>
            <ActiveRoute exact={item.href === "/"} href={item.href}>
              {item.name}
            </ActiveRoute>
          </li>
        ))}
      </ul>
    </nav>
  );
}
