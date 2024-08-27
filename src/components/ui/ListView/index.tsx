interface ListViewProps {
    title?: string; 
    items: string[]; 
}

function ListView({ title, items }: ListViewProps) {
    return (
        <div>
            {/* Conditionally render the title if it is provided */}
            {title && (
                <h3 className="font-inconsolata text-lg font-normal text-gray-400 mb-2">
                    {title}
                </h3>
            )}

            {/* Render the list of items */}
            <ul className="space-y-1">
                {items.map((item, index) => (
                    <li 
                        key={index} 
                        className="font-inter flex items-center gap-2"
                    >
                        {/* Bullet point styled as a middle dot */}
                        <span className="text-2xl font-bold text-primary-color">&#183;</span>
                        {/* Display the list item */}
                        <span className="text-base font-medium tracking-wide">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListView;
