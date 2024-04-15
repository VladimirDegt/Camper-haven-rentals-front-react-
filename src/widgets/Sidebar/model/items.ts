import
    React from "react";
import ContentEmail from '@/shared/assets/icons/redactor.svg';
import UploadFile from '@/shared/assets/icons/drag-drop.svg';
import MainIcon from '@/shared/assets/icons/home.svg';
import { RoutePath } from "@/shared/config/routeConfig/routeConfig";

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>
};

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'Home'
    },

    {
        path: RoutePath.catalog,
        Icon: UploadFile,
        text: 'Catalog'
    },
    {
        path: RoutePath.favorites,
        Icon: ContentEmail,
        text: 'Favorites'
    },

]