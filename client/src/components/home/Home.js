import React, { useEffect, useState } from "react";
import "./Home.css";
import ListItems from "../ListItems/ListItems";
function Home() {
    // const [offset, setOffset] = useState(0);

    // const onScroll = () => setOffset(window.pageYOffset);
    // useEffect(() => {
    //     // clean up code
    //     window.addEventListener("scroll", onScroll, { passive: true });
    //     // window.removeEventListener("scroll", onScroll);
    //     return () => window.removeEventListener("scroll", onScroll);
    // }, []);

    // console.log(offset);

    return (
        <div className="home-container">
            <div className="first-block-illustartion">
                <div className="intro">
                    <h1>
                        Économisez votre temps et votre argent! <br />
                        Ici vous avez les meilleures offres avec les critères
                        que vous choisissez !
                    </h1>
                    <form className="box-search-home">
                        <input
                            type="search"
                            name="home-search"
                            id="home-search"
                            placeholder="Search..."
                        />

                        <button>
                            <i class="fa fa-search"></i>
                        </button>
                    </form>
                </div>
            </div>
            <ListItems />
            <p>
                magnam delectus numquam? Corporis temporibus accusantium
                provident quia error accusamus! Excepturi voluptatibus,
                voluptates beatae tenetur maiores nihil aut fugit sunt amet
                adipisci voluptas? Quod dolorum consequuntur expedita quo
                quisquam nemo necessitatibus distinctio suscipit odio, veniam
                natus, ipsam nam exercitationem. Animi illum provident earum
                veritatis incidunt odit mollitia reprehenderit minima
                consequuntur numquam excepturi esse culpa tempore magni eaque a
                deserunt repudiandae cum, eum ut quas rem voluptas. Voluptates
                harum quam perferendis saepe inventore laborum reprehenderit
                architecto at ipsam nesciunt corrupti commodi doloribus labore
                natus fuga aliquid, laudantium minus amet rerum excepturi. Est
                laudantium praesentium animi quam dolores! Impedit quos, modi
                et, quia sequi aut, nulla ipsa explicabo quis asperiores animi
                perspiciatis suscipit saepe? Quisquam quasi error distinctio,
                omnis neque dolor cumque voluptas necessitatibus saepe inventore
                illum nemo optio rerum dolore tempore accusamus eos praesentium
                pariatur! Est ullam optio vitae natus quasi voluptatibus maxime
                fugiat at sit ducimus repellendus, laudantium accusamus quo
                nulla officia id suscipit. Rem corrupti ratione repellat dicta.
                perspiciatis suscipit saepe? Quisquam quasi error distinctio,
                omnis neque dolor cumque voluptas necessitatibus saepe inventore
                illum nemo optio rerum dolore tempore accusamus eos praesentium
                pariatur! Est ullam optio vitae natus quasi voluptatibus maxime
                fugiat at sit ducimus repellendus, laudantium accusamus quo
                nulla officia id suscipit. Rem corrupti ratione repellat dicta.
                temporibus mollitia totam, libero quis id iusto quos
                necessitatibus officiis labore blanditiis sequi ullam fugiat
                ipsa et fuga possimus, nobis eligendi aliquam? Nostrum veritatis
                debitis ipsum, tenetur libero nemo repudiandae praesentium omnis
                magnam delectus numquam? Corporis temporibus accusantium
                provident quia error accusamus! Excepturi voluptatibus,
                voluptates beatae tenetur maiores nihil aut fugit sunt amet
                adipisci voluptas? Quod dolorum consequuntur expedita quo
                quisquam nemo necessitatibus distinctio suscipit odio, veniam
                natus, ipsam nam exercitationem. Animi illum provident earum
                veritatis incidunt odit mollitia reprehenderit minima
                consequuntur numquam excepturi esse culpa tempore magni eaque a
                deserunt repudiandae cum, eum ut quas rem voluptas. Voluptates
                harum quam perferendis saepe inventore laborum reprehenderit
                architecto at ipsam nesciunt corrupti commodi doloribus labore
                natus fuga aliquid, laudantium minus amet rerum excepturi. Est
                laudantium praesentium animi quam dolores! Impedit quos, modi
                et, quia sequi aut, nulla ipsa explicabo quis asperiores animi
                perspiciatis suscipit saepe? Quisquam quasi error distinctio,
                omnis neque dolor cumque voluptas necessitatibus saepe inventore
                illum nemo optio rerum dolore tempore accusamus eos praesentium
                pariatur! Est ullam optio vitae natus quasi voluptatibus maxime
                fugiat at sit ducimus repellendus, laudantium accusamus quo
                nulla officia id suscipit. Rem corrupti ratione repellat dicta.
                temporibus mollitia totam, libero quis id iusto quos
                necessitatibus officiis labore blanditiis sequi ullam fugiat
                ipsa et fuga possimus, nobis eligendi aliquam? Nostrum veritatis
                debitis ipsum, tenetur libero nemo repudiandae praesentium omnis
                magnam delectus numquam? Corporis temporibus accusantium
                provident quia error accusamus! Excepturi voluptatibus,
                voluptates beatae tenetur maiores nihil aut fugit sunt amet
                adipisci voluptas? Quod dolorum consequuntur expedita quo
                quisquam nemo necessitatibus distinctio suscipit odio, veniam
                natus, ipsam nam exercitationem. Animi illum provident earum
                veritatis incidunt odit mollitia reprehenderit minima
                consequuntur numquam excepturi esse culpa tempore magni eaque a
                deserunt repudiandae cum, eum ut quas rem voluptas. Voluptates
                harum quam perferendis saepe inventore laborum reprehenderit
                architecto at ipsam nesciunt corrupti commodi doloribus labore
                natus fuga aliquid, laudantium minus amet rerum excepturi. Est
                laudantium praesentium animi quam dolores! Impedit quos, modi
                et, quia sequi aut, nulla ipsa explicabo quis asperiores animi
                perspiciatis suscipit saepe? Quisquam quasi error distinctio,
                omnis neque dolor cumque voluptas necessitatibus saepe inventore
                illum nemo optio rerum dolore tempore accusamus eos praesentium
                pariatur! Est ullam optio vitae natus quasi voluptatibus maxime
                fugiat at sit ducimus repellendus, laudantium accusamus quo
                nulla officia id suscipit. Rem corrupti ratione repellat dicta.
            </p>
        </div>
    );
}

export default Home;
