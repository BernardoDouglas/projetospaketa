const tempo = (segundos) => {

    const hora = Math.floor(segundos/3600)

    const minutos = Math.floor((segundos - (3600 * hora)) / 60)

    const segundo = Math.floor((segundos - (3600 * hora)) % 60)

    console.log(`tempo de duracão foi de: ${hora}:${minutos}:${segundos}`)
}
tempo(200)