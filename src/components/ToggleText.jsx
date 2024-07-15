import { useState } from 'react';

function ToggleText() {
    const [isVisible, setIsVisible] = useState(false);

    const showText = () => {
        setIsVisible(!isVisible);
    }

    return (
        <div>
            <button onClick={showText}>
                {isVisible ? "Esconder Texto" : "Mostrar Texto"}
            </button>
            {isVisible && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ducimus velit eligendi ullam impedit omnis ipsa minima eaque, molestiae laborum excepturi soluta accusamus adipisci quae amet delectus blanditiis hic in.
            Fugiat qui repellendus provident deserunt iusto. Laudantium harum totam esse repellat reiciendis facere molestiae veniam nulla assumenda ipsa temporibus laborum, necessitatibus perferendis aut iste quos illo nihil. Illum, deserunt inventore.
            Totam, nemo dicta dignissimos harum perferendis natus ut nulla, delectus odit, recusandae repellendus. Doloremque ab, cupiditate laborum delectus nulla explicabo quia, iure reiciendis nihil distinctio deserunt obcaecati impedit ex inventore.
            Consectetur, molestiae magnam architecto molestias commodi a nobis vitae cupiditate, quisquam fugit nesciunt nisi odio. Aliquid deserunt mollitia, assumenda nobis fugit dolor dolorem rerum ea, ut illo consequuntur minima recusandae.
            Saepe mollitia quibusdam accusantium necessitatibus molestiae et sequi a fugiat dolorem nisi illo, laborum, impedit quam debitis voluptatibus modi eos molestias animi optio ullam architecto ab! Laudantium rerum eius asperiores!
            Placeat nemo voluptate accusamus, consequuntur, eligendi quasi sunt blanditiis dolorum aliquid maxime, accusantium iusto natus quos laboriosam id sit eaque animi recusandae! Voluptates non nemo veritatis rerum aperiam dolorum odit?
            Optio, ab harum? Eveniet mollitia incidunt quis corrupti fugiat reiciendis, aperiam vero eum autem quisquam officiis. Dolores perspiciatis reprehenderit dicta dolorum hic sint dignissimos quas nam dolor ducimus. Ut, error!
            Similique placeat non neque pariatur. Culpa odit quos praesentium expedita quasi corporis mollitia dolor pariatur cum, sapiente nesciunt asperiores voluptatum ratione magni omnis. Sed labore temporibus quo modi sit neque!
            Maxime, vero nihil saepe quasi, nostrum minus animi vitae iste earum exercitationem illo, commodi eveniet dolores! Ratione mollitia blanditiis facere deleniti, quibusdam dolorem quae repellat debitis voluptatibus ipsam inventore soluta!
            Sunt voluptatibus vel eius ex itaque repellat aut, corrupti commodi blanditiis porro exercitationem amet architecto ad consectetur sit quas, earum dolorem saepe eos illo omnis assumenda adipisci quidem! Aperiam, eaque!</p>}
        </div>
    )
}

export default ToggleText;