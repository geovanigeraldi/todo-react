import { useState } from 'react';
import { v4 as uuid } from 'uuid'

function Page2() {
  const [titulo, setTitulo] = useState("");
  const [titulos, setTitulos] = useState([]);

  function handleAdicionar() {
    if (titulo) {

      const arrTitulos = {
        id: uuid(),
        titulo: titulo
      }

      const arrNew = [...titulos];
      arrNew.unshift(arrTitulos);

      setTitulos(arrNew);
      setTitulo("");
      //console.log(arrNew);           
    }
  }

  return (
    <div>
      
      <div>
        <input
          type="text"
          onChange={((e) => setTitulo(e.target.value))}
          value={titulo}
        />
        <button
          type="button"
          onClick={handleAdicionar}
        >
          Adicionar
        </button>
      </div>

      <div>
        {titulos.map((titulo) => (
          <div key={titulo.id}>
            <p>
              {titulo.titulo}
            </p>
            <button>Excluir</button>
          </div>
        ))
        }
      </div>
      
    </div>
  );
}

export default Page2;