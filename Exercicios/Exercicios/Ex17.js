const idade = (dias) => {

    const amountOfYears = Math.floor(dias / 365)
    const amountOfMonths = Math.floor((dias-(365 * amountOfYears)) / 31)
    const amountOfDays = Math.floor((dias-(365 * amountOfYears)) % 31)

    console.log(`sua idade é de: ${amountOfYears} anos, ${amountOfMonths} meses e ${amountOfDays} dias`)

}
idade(926)