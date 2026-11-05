/* ===== WEEK 8 — Defining and non-defining relative clauses ===== */
COURSE.weeks.push({
  n: 8,
  title: 'Относительные предложения: с запятыми и без',
  tag: 'defining / non-defining · who, which, that, whose, where, when · пропуск местоимения',
  goal: 'Различать определительные (нужные для смысла) и описательные (дополнительная информация, с запятыми) придаточные, правильно выбирать who / which / that / whose / where / when, пропускать местоимение там, где это возможно, и использовать which для всей предыдущей фразы.',
  days: [
    ['Повторение A2', ['who, which, that, where, whose', '<i>The man who lives next door…</i>', 'Дать 6 определений словам через who / which / where']],
    ['Теория — «нужная» и «бонусная» информация', ['Прочитать раздел «Теория»: defining и non-defining', 'Аналогия Фейнмана: адрес на конверте и открытка внутри', 'Найти 5 предложений с запятыми и which в новостях BBC']],
    ['Non-defining', ['Запятые с двух сторон: <i>My brother, who lives in Leeds, is a nurse.</i>', 'that здесь нельзя!', 'Добавить «бонус» к 6 предложениям о своей семье']],
    ['Пропуск местоимения', ['Можно пропустить, если после него новое подлежащее: <i>the book (that) I read</i>', 'Нельзя: <i>the man who called</i>', 'Упражнение: где можно убрать who / which / that']],
    ['Which о всей фразе, when, whose', ['<i>He passed the exam, which surprised everyone.</i>', '<i>the day when we met, the year when I was born</i>', 'Предлог в конце: <i>the person I spoke to</i>']],
    ['Тест + закрепление', ['Пройти тест недели (раздел 🎯) — цель 80%+', 'Разыграть диалог недели — обе роли', 'Написать статью (~100 слов) о знаменитом человеке вашей страны']],
    ['Фейнман-урок недели', ['Запись 2–3 мин: «адрес на конверте» и «открытка внутри»', 'Таблица: где можно that и где можно пропустить', 'Список пробелов → план недели 9 (used to / be used to, глагольные модели)']],
  ],
  progress: ['Defining', 'Non-defining', 'Пропуск местоимения', 'Which / whose / when'],
  theory: `
    <h3>Идея в одной фразе</h3>
    <p><strong>Defining</strong> (без запятых) — информация нужна, чтобы понять, <em>о ком именно</em> речь. <strong>Non-defining</strong> (с запятыми) — <em>дополнительная</em> информация, без неё смысл не теряется.</p>
    ${ex('The woman who lives next door is a doctor.', 'Женщина, которая живёт по соседству, — врач (какая именно? — та, что по соседству).')}
    ${ex('My mother, who lives in York, is a doctor.', 'Моя мама, которая живёт в Йорке, — врач (мама одна, город — просто бонус).')}
    <h3>Аналогия Фейнмана</h3>
    <p>Defining — это <strong>адрес на конверте</strong>: без него письмо не дойдёт до нужного человека. Non-defining — <strong>открытка внутри</strong>: приятная подробность, но адресат и так понятен. Запятые — это «скобки» вокруг открытки.</p>
    ${note('<strong>Правило-проверка:</strong> уберите придаточное. Смысл остался (понятно, о ком речь)? Значит, это non-defining — нужны запятые, и that ставить нельзя.')}`,
  forms: `
    <h3>Местоимения</h3>
    ${tbl(['Слово', 'Для чего', 'Defining', 'Non-defining'], [
      ['who', 'люди', 'да', 'да'],
      ['which', 'вещи, животные', 'да', 'да'],
      ['that', 'люди и вещи', 'да', '<em>нет</em>'],
      ['whose', 'чей', 'да', 'да'],
      ['where', 'место', 'да', 'да'],
      ['when', 'время', 'да', 'да'],
      ['whom', 'кого / кому (формально)', 'да', 'да']])}
    <h3>Когда местоимение можно пропустить</h3>
    ${tbl(['Можно (дальше новое подлежащее)', 'Нельзя (местоимение — подлежащее)'], [
      ['the film (that) <em>we</em> watched', 'the film that <em>won</em> the Oscar'],
      ['the man (who) <em>I</em> met', 'the man who <em>called</em> you'],
      ['the person (who) <em>I</em> spoke to', 'the person who <em>spoke</em> to me']])}
    ${note('<strong>Только в defining:</strong> в предложениях с запятыми местоимение пропускать нельзя: <i>My car, which I bought last year, is red.</i>')}`,
  usage: `
    <h3>Which о всей предыдущей фразе</h3>
    ${ex('He passed all his exams, which surprised everyone.', 'Он сдал все экзамены, что всех удивило.')}
    ${ex('It rained all weekend, which was a shame.', 'Все выходные шёл дождь, что было обидно.')}
    <p>Здесь <i>which</i> = «что» в русском и относится ко всему событию. <i>What</i> в этой роли нельзя.</p>
    <h3>Whose, where, when</h3>
    ${ul(['<i>That’s the girl whose dog bit me.</i>', '<i>I’ll never forget the day when I met you.</i>', '<i>This is the café where we had our first date.</i>'])}
    <h3>Предлог в конце</h3>
    ${ex('This is the flat I told you about.', 'Это квартира, о которой я тебе рассказывал.')}
    ${ex('This is the flat about which I told you.', 'То же, очень формально (в письме, в официальной речи).')}`,
  compare: `
    ${tbl(['', 'Defining', 'Non-defining'], [
      ['Запятые', 'нет', 'да'],
      ['that', 'можно', 'нельзя'],
      ['Пропуск местоимения', 'иногда можно', 'нельзя'],
      ['Роль', 'уточняет, кто именно', 'добавляет подробность'],
      ['Пример', 'Students who study pass.', 'Anna, who studies a lot, passed.']])}
    <h3>Запятые меняют смысл</h3>
    ${ex('My sister who lives in Spain is a teacher.', 'Та моя сестра, что живёт в Испании, — учитель (у меня несколько сестёр).')}
    ${ex('My sister, who lives in Spain, is a teacher.', 'Моя сестра (она одна) живёт в Испании и работает учителем.')}
    ${note('<strong>Частые ошибки русскоговорящих:</strong> <i>My father, that is a pilot, …</i> → <i>who is a pilot</i>. <i>He was late, what made me angry</i> → <i>which made me angry</i>.')}`,
  dialog: [
    ['H', 'Who’s the man who’s talking to your sister?', 'Кто этот мужчина, который разговаривает с твоей сестрой?'],
    ['K', 'That’s Daniel, who I work with. He’s the one whose band played at our party.', 'Это Дэниел, мы вместе работаем. Это его группа играла у нас на вечеринке.'],
    ['H', 'Oh, the band that played all night? They were brilliant.', 'А, та группа, что играла всю ночь? Они были великолепны.'],
    ['K', 'Yes. Daniel, who’s also a great cook, is opening a restaurant next month.', 'Да. Дэниел, который ещё и отлично готовит, в следующем месяце открывает ресторан.'],
    ['H', 'Where is it going to be?', 'А где он будет?'],
    ['K', 'In the old bank on High Street, which has been empty for years.', 'В старом банке на Хай-стрит, который уже много лет пустует.'],
    ['H', 'I know it! That’s the building where my grandad used to work.', 'Я его знаю! Это здание, где раньше работал мой дедушка.'],
    ['K', 'Small world! He’s invited us to the opening night, which is on the 12th.', 'Мир тесен! Он пригласил нас на открытие, которое двенадцатого.'],
  ],
  test: [
    { q: 'My mother, ___ lives in York, is a doctor.', o: ['that', 'who', 'which', 'whose'], a: 1, c: 1, e: 'Non-defining, человек → who (that нельзя).' },
    { q: 'The film ___ won the Oscar was boring.', o: ['that', 'who', 'where', 'what'], a: 0, c: 0, e: 'Defining, вещь → that / which.' },
    { q: 'He passed all his exams, ___ surprised everyone.', o: ['what', 'that', 'which', 'who'], a: 2, c: 3, e: 'Относится ко всей фразе → which.' },
    { q: 'That’s the girl ___ dog bit me.', o: ['who', 'which', 'whom', 'whose'], a: 3, c: 3, e: 'Чей → whose.' },
    { q: 'In which sentence can you omit the pronoun?', o: ['The man who called you is here.', 'The book that I read was great.', 'My car, which is red, is old.', 'The dog that bit me ran away.'], a: 1, c: 2, e: 'После that идёт новое подлежащее (I) → можно пропустить.' },
    { q: 'Which sentence is correct?', o: ['My car, that I bought last year, is red.', 'My car I bought last year, is red.', 'My car, which I bought last year, is red.', 'My car, what I bought last year, is red.'], a: 2, c: 1, e: 'Non-defining: запятые + which, без пропуска.' },
    { q: 'I’ll never forget the day ___ we met.', o: ['when', 'where', 'which', 'whose'], a: 0, c: 3, e: 'Время → when.' },
    { q: 'This is the flat I told you ___.', o: ['it', 'about', 'that', 'which'], a: 1, c: 2, e: 'Предлог переходит в конец: the flat I told you about.' },
    { q: 'Students ___ study regularly usually pass. (какие именно?)', o: [', who', ', that', 'which', 'who'], a: 3, c: 0, e: 'Defining, без запятых, люди → who.' },
    { q: '«My sister, who lives in Spain, …» means:', o: ['I have several sisters.', 'I have one sister.', 'My sister lives in Russia.', 'I don’t have a sister.'], a: 1, c: 1, e: 'Запятые → дополнительная информация: сестра одна.' },
  ],
  feynman: {
    task: 'Объясните разницу между «адресом на конверте» (defining) и «открыткой внутри» (non-defining) так, чтобы понял 10-летний ребёнок.',
    prompts: ['Почему в предложении с запятыми нельзя that?', 'Когда можно пропустить who / which / that?', 'Как сказать «что всех удивило» про целую ситуацию?', 'Опишите 3 членов семьи: одно предложение defining и одно non-defining на каждого.'],
  },
});
