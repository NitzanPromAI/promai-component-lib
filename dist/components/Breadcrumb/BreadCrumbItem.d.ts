interface Props {
    id?: string;
    text: string;
    isActive?: boolean;
    image?: string;
    textOverflow?: string;
    loading?: boolean;
    handleClick: () => void;
}
declare const BreadCrumbItem: ({ id, text, isActive, image, textOverflow, loading, handleClick }: Props) => import("react/jsx-runtime").JSX.Element;
export default BreadCrumbItem;
