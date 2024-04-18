import {CardList} from "@/features/CardList/CardList";
import {FilterSection} from "@/features/FilterSection/FilterSection";
import cls from "./CatalogPage.module.scss";

const CatalogPage = () => {

    return (
        <main className={cls.container}>
            <FilterSection/>
            <CardList/>
        </main>
)
};

export default CatalogPage;
