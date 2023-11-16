interface sheetProps {
    id: string | number;
    image: string;
    catalogNumber: string;
}
interface BreadcrumbProps {
    data: {
        sheets: sheetProps[];
        name?: string;
    };
    loading: boolean;
}
declare const Breadcrumb: (props: BreadcrumbProps) => import("react/jsx-runtime").JSX.Element;
export default Breadcrumb;
