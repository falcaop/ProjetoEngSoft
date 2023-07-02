const unidades = [
    {
        nome: 'UBS Posto de Saúde',
        endereco: 'R. Luís Saia, 80 - Parque Arnold Schimidt, São Carlos - SP, 13564-020',
        mapsURL: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14796.897677170346!2d-47.920444512841826!3d-22.0027105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b870c9dc96bf89%3A0x975bad57a60b0a06!2sUBS%20Posto%20de%20Sa%C3%BAde!5e0!3m2!1sen!2sbr!4v1688336463403!5m2!1sen!2sbr',
        horario: 'De segunda-feira à sexta-feira, das 07:00 às 17:00',
    },
    {
        nome: 'UBS São José',
        endereco: 'Av. Araraquara, 422 - Vila Brasilia, São Carlos - SP, 13566-770',
        mapsURL: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14797.12186484737!2d-47.8985591128418!3d-22.000562099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8712ad616405f%3A0x3f748aa0348ff6f9!2zVUJTIFPDo28gSm9zw6k!5e0!3m2!1sen!2sbr!4v1688336513326!5m2!1sen!2sbr',
        horario: 'De segunda-feira à sexta-feira, das 07:00 às 17:00',
    },
    {
        nome: 'UBS Santa Felícia - Benjamim Lopez Osores',
        endereco: 'Rua Joaquim A, R. Joaquim Augusto Ribeiro de Souza, 40 - Parque Santa Felicia Jardim, São Carlos - SP, 13562-100',
        mapsURL: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14796.888681680488!2d-47.93188441284182!3d-22.00279669999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b871ae5ec7cbb1%3A0xbd75053908f3fe1c!2sUBS%20Santa%20Fel%C3%ADcia%20-%20Benjamim%20Lopez%20Osores!5e0!3m2!1sen!2sbr!4v1688336546388!5m2!1sen!2sbr',
        horario: 'De segunda-feira à sexta-feira, das 07:00 às 17:00',
    },
    {
        nome: 'UBS Parque Delta',
        endereco: 'Rua Pedro Cavarette, 151 - Jardim Parque Delta, São Carlos - SP, 13564-490',
        mapsURL: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14796.888681680488!2d-47.93188441284182!3d-22.00279669999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8710ace96a20d%3A0xee9ec5d8ebff6ff5!2sUBS%20Parque%20Delta!5e0!3m2!1sen!2sbr!4v1688336572946!5m2!1sen!2sbr',
        horario: 'De segunda-feira à sexta-feira, das 07:00 às 17:00',
    },
    {
        nome: 'UPA Santa Felicia - San Carlos',
        endereco: 'R. Dr. João Navarro Siquerolli, s/n - Parque Santa Felicia Jardim, São Carlos - SP, 13563-714',
        mapsURL: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59187.598532355354!2d-47.962784241243!3d-22.002691757212343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b870a23a4cc95b%3A0x46afcce34cb5c343!2sUPA%20Santa%20Felicia%20-%20San%20Carlos!5e0!3m2!1sen!2sbr!4v1688336626379!5m2!1sen!2sbr',
        horario: 'Atendimento 24 horas',
    },
    {
        nome: 'Unidade de Emergência - UPA',
        endereco: 'Av. Grécia, 229 - Vila Prado, São Carlos - SP, 13574-140',
        mapsURL: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59187.598532355354!2d-47.962784241243!3d-22.002691757212343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b87711f246cb87%3A0x1769bece47fa429f!2sEmergency%20Unit%20-%20UPA!5e0!3m2!1sen!2sbr!4v1688336672086!5m2!1sen!2sbr',
        horario: 'Atendimento 24 horas',
    },
    {
        nome: 'UNIDADE PRONTO ATENDIMENTO MARIA DORIS DE CAMPOS P LOPES',
        endereco: 'R. Dr. João Navarro Siquerolli, S/N - Jardim Acapulco, São Carlos - SP, 13563-714',
        mapsURL: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59187.598532355354!2d-47.962784241243!3d-22.002691757212343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b870a24ee29023%3A0x37c128b06b98f39e!2sUNIDADE%20PRONTO%20ATENDIMENTO%20MARIA%20DORIS%20DE%20CAMPOS%20P%20LOPES!5e0!3m2!1sen!2sbr!4v1688336708338!5m2!1sen!2sbr',
        horario: 'Atendimento 24 horas',
    },
    {
        nome: 'UNIDADE DE PRONTO ATENDIMENTO UPA CIDADE ARACY',
        endereco: 'R. Sebastião Lemos, 426 - Cidade Aracy, São Carlos - SP, 13573-108',
        mapsURL: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59187.598532355354!2d-47.962784241243!3d-22.002691757212343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b87797b118dbb1%3A0x390b5690dfbb6b5a!2sUNIDADE%20DE%20PRONTO%20ATENDIMENTO%20UPA%20CIDADE%20ARACY!5e0!3m2!1sen!2sbr!4v1688336737277!5m2!1sen!2sbr',
        horario: 'Atendimento 24 horas',
    },
];

export default unidades