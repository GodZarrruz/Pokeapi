import React from "react";

const Pokeinfo = ({ data }) => {
    console.log(data)
    return (
        <>
            {
                (!data) ? "" : (
                    <>
                        <h1>{data.name}</h1>
                        <img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/ ${data.id}.svg'} />
                        <div className="abilities">
                            {
                                data.abilities.map(poke=>{
                                    return(
                                        <>
                                        <div className="group">
                                        <h2>{poke.abilities.name}</h2>
                                        </div>
                                        </>
                                    )
                                })
                            }
                            
                        </div>
                        <div className="base-start">
                           {
                            data.starts.map(poke=>{
                                return(
                                    <>
                                        <h3>{poke.start.name}:{poke.base_start}</h3>
                                    </>
                                )
                            })
                           }
                        </div>
                    </>
                )
            }

        </>
    )
}
export default Pokeinfo