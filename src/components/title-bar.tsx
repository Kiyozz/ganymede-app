import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu.tsx'
import { Link } from '@tanstack/react-router'
import { getCurrentWindow } from '@tauri-apps/api/window'
import { ChevronDownIcon } from 'lucide-react'

const appWindow = getCurrentWindow()

export function TitleBar() {
  return (
    <div className="sticky top-0 flex h-[30px] items-center bg-[#329ea3]">
      <DropdownMenu>
        <DropdownMenuTrigger className="h-full px-2 outline-none">
          <ChevronDownIcon className="size-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" alignOffset={6} sideOffset={0}>
          <DropdownMenuItem asChild>
            <Link to="/">Accueil</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/guides">Guides</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/downloads">Téléchargements</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/settings">Paramètres</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <p data-tauri-drag-region="" className="grow cursor-default select-none text-center font-semibold">
        Ganymède
      </p>
      <div className="flex justify-end">
        <button
          onClick={async () => {
            await appWindow.minimize()
          }}
          className="inline-flex size-[30px] items-center justify-center hover:bg-[#5bbec3]"
          id="titlebar-minimize"
        >
          <img src="https://api.iconify.design/mdi:window-minimize.svg" alt="minimize" />
        </button>
        <button
          onClick={async () => {
            await appWindow.toggleMaximize()
          }}
          className="inline-flex size-[30px] items-center justify-center hover:bg-[#5bbec3]"
          id="titlebar-maximize"
        >
          <img src="https://api.iconify.design/mdi:window-maximize.svg" alt="maximize" />
        </button>
        <button
          onClick={async () => {
            await appWindow.close()
          }}
          className="inline-flex size-[30px] items-center justify-center hover:bg-[#5bbec3]"
          id="titlebar-close"
        >
          <img src="https://api.iconify.design/mdi:close.svg" alt="close" />
        </button>
      </div>
    </div>
  )
}
