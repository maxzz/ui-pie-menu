import React, { CSSProperties, ReactNode } from 'react';

const styleText: CSSProperties = {
    textShadow:
        `
        0.02em 0.02em 0 var(--detail-color), 
        -0.02em -0.02em 0 var(--detail-color), 
        -0.02em 0.02em 0 var(--detail-color), 
        0.02em -0.02em 0 var(--detail-color), 
        0 0.02em 0 var(--detail-color), 
        0 -0.02em 0 var(--detail-color), 
        -0.02em 0 0 var(--detail-color), 
        0.02em 0 0 var(--detail-color)
        `
};

function Cell({ caption, content }: { caption: ReactNode, content: ReactNode; }) {
    function onClick(event: React.MouseEvent<HTMLElement, MouseEvent>) {
        const clickCapElm = event.currentTarget;
        clickCapElm.parentElement!.querySelectorAll<HTMLElement>('.cell-cap')
            .forEach((cap) => {
                const cnt = cap.nextElementSibling;
                const v = cap.dataset;
                if (cap === clickCapElm) {
                    cnt?.classList.toggle('hidden');
                    v.highlighted ? delete v.highlighted : v.highlighted = '1';
                } else {
                    cnt?.classList.add('hidden');
                    delete v.highlighted;
                }
            });
    }
    return (<>
        <div
            className="cell-cap mx-2 py-2 text-xl font-bold tracking-tighter uppercase 
            text-neutral-300/80 bg-neutral-400/20 border-neutral-900/70 border rounded-lg shadow [--detail-color:#1c0493]
            data-highlighted:bg-orange-500/50 data-highlighted:[--detail-color:#e800ff]
            select-none cursor-pointer active:scale-x-[.99] 
            grid place-items-center"
            style={styleText}
            onClick={onClick}
        >
            {caption}
        </div>

        <div
            className="
                cell-cnt hidden mx-2 mb-2 px-4 py-4 col-span-full text-sm text-neutral-100/70 bg-orange-400/70 border-neutral-900/20 border rounded 
                first-letter:mr-2 first-letter:text-4xl first-letter:text-orange-800 first-letter:font-bold first-letter:float-left first-letter:select-none
            ">
            {content}
        </div>
    </>);
}

const articles = [
    { caption: 'article 1', content: '1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dignissimos. Aliquam delectus mollitia voluptatem eveniet ipsum natus laborum atque quae praesentium, fugiat a! Temporibus consequatur dolorum odio voluptatibus. Numquam, perferendis.' },
    { caption: 'article 2', content: '2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dignissimos. Aliquam delectus mollitia voluptatem eveniet ipsum natus laborum atque quae praesentium, fugiat a! Temporibus consequatur dolorum odio voluptatibus. Numquam, perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dignissimos. Aliquam delectus mollitia voluptatem eveniet ipsum natus laborum atque quae praesentium, fugiat a! Temporibus consequatur dolorum odio voluptatibus. Numquam, perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dignissimos. Aliquam delectus mollitia voluptatem eveniet ipsum natus laborum atque quae praesentium, fugiat a! Temporibus consequatur dolorum odio voluptatibus. Numquam, perferendis.' },
    { caption: 'article 3', content: '3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dignissimos. Aliquam delectus mollitia voluptatem eveniet ipsum natus laborum atque quae praesentium, fugiat a! Temporibus consequatur dolorum odio voluptatibus. Numquam, perferendis.' },
    { caption: 'article 4', content: '4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dignissimos. Aliquam delectus mollitia voluptatem eveniet ipsum natus laborum atque quae praesentium, fugiat a! Temporibus consequatur dolorum odio voluptatibus. Numquam, perferendis.' },
    { caption: 'article 5', content: '5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dignissimos. Aliquam delectus mollitia voluptatem eveniet ipsum natus laborum atque quae praesentium, fugiat a! Temporibus consequatur dolorum odio voluptatibus. Numquam, perferendis.' },
    { caption: 'article 6', content: '6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dignissimos. Aliquam delectus mollitia voluptatem eveniet ipsum natus laborum atque quae praesentium, fugiat a! Temporibus consequatur dolorum odio voluptatibus. Numquam, perferendis.' },
    { caption: 'article 7', content: '7 Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dignissimos. Aliquam delectus mollitia voluptatem eveniet ipsum natus laborum atque quae praesentium, fugiat a! Temporibus consequatur dolorum odio voluptatibus. Numquam, perferendis.' },
];

export function Demo3_GridPreview() {
    return (
        <div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-y-1 grid-flow-dense">
                {articles.map((article, idx) => (
                    <Cell {...article} key={idx} />
                ))}
            </div>
        </div>
    );
}
