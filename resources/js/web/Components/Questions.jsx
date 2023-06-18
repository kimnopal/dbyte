import Question from "./Question";

export default function Questions({ data }) {
    return (
        <section className="px-4 pb-12">
            <div className="flex flex-col gap-y-6 ">
                {data.map((items) => (
                    <Question data={items} />
                ))}
            </div>
        </section>
    );
}
