/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SettingsImport } from './routes/settings'
import { Route as IndexImport } from './routes/index'
import { Route as GuidesIndexImport } from './routes/guides/index'
import { Route as DownloadsIndexImport } from './routes/downloads/index'
import { Route as GuidesIdImport } from './routes/guides/$id'
import { Route as DownloadsStatusImport } from './routes/downloads/$status'

// Create/Update Routes

const SettingsRoute = SettingsImport.update({
  path: '/settings',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const GuidesIndexRoute = GuidesIndexImport.update({
  path: '/guides/',
  getParentRoute: () => rootRoute,
} as any)

const DownloadsIndexRoute = DownloadsIndexImport.update({
  path: '/downloads/',
  getParentRoute: () => rootRoute,
} as any)

const GuidesIdRoute = GuidesIdImport.update({
  path: '/guides/$id',
  getParentRoute: () => rootRoute,
} as any)

const DownloadsStatusRoute = DownloadsStatusImport.update({
  path: '/downloads/$status',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/settings': {
      id: '/settings'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof SettingsImport
      parentRoute: typeof rootRoute
    }
    '/downloads/$status': {
      id: '/downloads/$status'
      path: '/downloads/$status'
      fullPath: '/downloads/$status'
      preLoaderRoute: typeof DownloadsStatusImport
      parentRoute: typeof rootRoute
    }
    '/guides/$id': {
      id: '/guides/$id'
      path: '/guides/$id'
      fullPath: '/guides/$id'
      preLoaderRoute: typeof GuidesIdImport
      parentRoute: typeof rootRoute
    }
    '/downloads/': {
      id: '/downloads/'
      path: '/downloads'
      fullPath: '/downloads'
      preLoaderRoute: typeof DownloadsIndexImport
      parentRoute: typeof rootRoute
    }
    '/guides/': {
      id: '/guides/'
      path: '/guides'
      fullPath: '/guides'
      preLoaderRoute: typeof GuidesIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/settings': typeof SettingsRoute
  '/downloads/$status': typeof DownloadsStatusRoute
  '/guides/$id': typeof GuidesIdRoute
  '/downloads': typeof DownloadsIndexRoute
  '/guides': typeof GuidesIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/settings': typeof SettingsRoute
  '/downloads/$status': typeof DownloadsStatusRoute
  '/guides/$id': typeof GuidesIdRoute
  '/downloads': typeof DownloadsIndexRoute
  '/guides': typeof GuidesIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/settings': typeof SettingsRoute
  '/downloads/$status': typeof DownloadsStatusRoute
  '/guides/$id': typeof GuidesIdRoute
  '/downloads/': typeof DownloadsIndexRoute
  '/guides/': typeof GuidesIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/settings'
    | '/downloads/$status'
    | '/guides/$id'
    | '/downloads'
    | '/guides'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/settings'
    | '/downloads/$status'
    | '/guides/$id'
    | '/downloads'
    | '/guides'
  id:
    | '__root__'
    | '/'
    | '/settings'
    | '/downloads/$status'
    | '/guides/$id'
    | '/downloads/'
    | '/guides/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  SettingsRoute: typeof SettingsRoute
  DownloadsStatusRoute: typeof DownloadsStatusRoute
  GuidesIdRoute: typeof GuidesIdRoute
  DownloadsIndexRoute: typeof DownloadsIndexRoute
  GuidesIndexRoute: typeof GuidesIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  SettingsRoute: SettingsRoute,
  DownloadsStatusRoute: DownloadsStatusRoute,
  GuidesIdRoute: GuidesIdRoute,
  DownloadsIndexRoute: DownloadsIndexRoute,
  GuidesIndexRoute: GuidesIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/settings",
        "/downloads/$status",
        "/guides/$id",
        "/downloads/",
        "/guides/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/settings": {
      "filePath": "settings.tsx"
    },
    "/downloads/$status": {
      "filePath": "downloads/$status.tsx"
    },
    "/guides/$id": {
      "filePath": "guides/$id.tsx"
    },
    "/downloads/": {
      "filePath": "downloads/index.tsx"
    },
    "/guides/": {
      "filePath": "guides/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
