import {CardList} from "@/features/CardList/CardList";
import {FilterSection} from "@/features/FilterSection/FilterSection";
import cls from "./CatalogPage.module.scss";
import SimpleBar from "simplebar-react";

const CatalogPage = () => {

    return (
        <SimpleBar style={{maxHeight: 1000}}>
            <main className={cls.container}>
                <FilterSection/>
                <CardList/>
            </main>
        </SimpleBar>
    )
};

export default CatalogPage;
