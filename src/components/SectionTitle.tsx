const SectionTitle = ({
    title,
    darkMode,
}: {
    title: string;
    darkMode: boolean;
}) => {
    return (
        <h1
            className={`text-3xl ${
                darkMode ? "text-white" : "text-black"
            } mb-10`}
        >
            {title}
        </h1>
    );
};

export default SectionTitle;
