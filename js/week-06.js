/* ===== WEEK 6 — Passive in all tenses, have something done ===== */
COURSE.weeks.push({
  n: 6,
  title: 'Пассив во всех временах · have something done',
  tag: 'is being built · has been sold · will be delivered · I had my hair cut',
  goal: 'Использовать пассив во всех основных временах и с модальными глаголами, говорить об услугах (have / get something done) и передавать мнения через <i>It is said that…</i>, <i>He is believed to…</i>',
  days: [
    ['Повторение A2', ['Present и Past Simple Passive: <i>is made, was built</i>', 'by + исполнитель; made of / from / in', 'Переписать 5 активных предложений в пассивные']],
    ['Теория — be в любом времени + V3', ['Прочитать раздел «Теория»: формула пассива', 'Аналогия Фейнмана: конструктор, где меняется только be', 'Составить таблицу пассива для глагола <i>build</i> во всех временах']],
    ['Continuous и Perfect Passive', ['<i>is being repaired, was being built</i>', '<i>has been sold, had been stolen</i>', 'Описать город: что строится, что уже построено']],
    ['Будущее и модальные', ['<i>will be delivered, is going to be opened</i>', '<i>must be done, can be found, should be checked</i>', 'Написать 6 правил для офиса в пассиве']],
    ['Have something done', ['<i>I had my car repaired.</i> — мне починили (не сам)', '<i>get</i> — разговорнее: <i>I’m getting my hair cut tomorrow.</i>', 'Рассказать о 5 услугах, которыми вы пользуетесь']],
    ['Тест + закрепление', ['Пройти тест недели (раздел 🎯) — цель 80%+', 'Разыграть диалог недели — обе роли', 'Написать новостную заметку (~100 слов) в пассиве']],
    ['Фейнман-урок недели', ['Запись 2–3 мин: «меняется только be»', 'Шпаргалка: пассив в 8 временах', 'Список пробелов → план недели 7 (косвенная речь B1)']],
  ],
  progress: ['Пассив во временах', 'Пассив с модальными', 'Have something done', 'It is said that…'],
  theory: `
    <h3>Идея в одной фразе</h3>
    <p>Пассив в любом времени строится одинаково: <strong>be в нужном времени + V3</strong>. Меняется только форма be, причастие остаётся тем же.</p>
    ${ex('The bridge is being repaired.', 'Мост сейчас ремонтируют (процесс).')}
    ${ex('The bridge has been repaired.', 'Мост отремонтировали (результат).')}
    <h3>Аналогия Фейнмана</h3>
    <p>Пассив — это <strong>конструктор</strong> из двух деталей. Деталь «V3» не меняется никогда (<i>repaired</i>). Деталь «be» вы берёте из того времени, которое нужно: <i>is, was, is being, has been, will be, must be…</i> Знаете времена с be — знаете весь пассив.</p>
    ${note('<strong>Правило-проверка:</strong> поставьте вместо V3 прилагательное, например <i>happy</i>. <i>The bridge has been happy</i> — грамматика та же. Если форма be верна, пассив верен.')}
    <h3>Have something done — услуга</h3>
    ${ex('I had my hair cut yesterday.', 'Вчера я подстригся (меня подстригли в парикмахерской).')}
    <p>По-русски «я подстригся» звучит, будто сам. В английском <i>I cut my hair</i> значит буквально «сам себя подстриг».</p>`,
  forms: `
    <h3>Пассив во временах (build)</h3>
    ${tbl(['Время', 'Пассив', 'Пример'], [
      ['Present Simple', 'is / are built', 'Houses are built of brick here.'],
      ['Present Continuous', 'is / are <em>being</em> built', 'A new school is being built.'],
      ['Past Simple', 'was / were built', 'The castle was built in 1200.'],
      ['Past Continuous', 'was / were <em>being</em> built', 'The road was being built when I moved.'],
      ['Present Perfect', 'has / have <em>been</em> built', 'Ten houses have been built this year.'],
      ['Past Perfect', 'had <em>been</em> built', 'The hotel had been built before the war.'],
      ['Future', 'will <em>be</em> built', 'A stadium will be built here.'],
      ['Модальные', 'must / can / should <em>be</em> built', 'It must be finished by May.']])}
    <h3>Have / get something done</h3>
    ${tbl(['', 'Пример', 'Рус.'], [
      ['Present', 'I have my car serviced every year.', 'Мне обслуживают машину каждый год.'],
      ['Past', 'She had her phone repaired.', 'Ей починили телефон.'],
      ['Future', 'We’re going to get the kitchen painted.', 'Нам покрасят кухню.'],
      ['Неприятность', 'He had his wallet stolen.', 'У него украли кошелёк.']])}`,
  usage: `
    <h3>It is said that… / He is said to…</h3>
    ${tbl(['Конструкция', 'Пример', 'Рус.'], [
      ['It is said that…', 'It is said that the house is haunted.', 'Говорят, что в доме водятся привидения.'],
      ['It is believed that…', 'It is believed that he left the country.', 'Считается, что он покинул страну.'],
      ['He is thought to be…', 'She is thought to be the best player.', 'Её считают лучшим игроком.'],
      ['It is expected that…', 'It is expected that prices will rise.', 'Ожидается, что цены вырастут.']])}
    <h3>Где встречается</h3>
    ${ul(['Новости: <i>Three people have been arrested.</i>', 'Объявления: <i>Your order will be delivered on Monday.</i>', 'Правила: <i>Phones must be switched off.</i>', 'Процессы: <i>The grapes are picked, crushed and then stored.</i>'])}`,
  compare: `
    ${tbl(['', 'Active', 'Passive', 'Have something done'], [
      ['Кто делает', 'подлежащее', 'неважно / by…', 'специалист для меня'],
      ['Пример', 'The mechanic repaired my car.', 'My car was repaired.', 'I had my car repaired.'],
      ['Фокус', 'исполнитель', 'предмет', 'заказчик услуги']])}
    <h3>Процесс или результат</h3>
    ${ex('My car is being repaired.', 'Машину сейчас ремонтируют (поэтому я на автобусе).')}
    ${ex('My car has been repaired.', 'Машину отремонтировали (можно забирать).')}
    ${note('<strong>Частые ошибки русскоговорящих:</strong> пропуск being: <i>The house is built now</i> → <i>is <em>being</em> built</i>. И <i>I cut my hair</i> о парикмахерской → <i>I had my hair cut</i>.')}`,
  dialog: [
    ['L', 'Have you heard? The old cinema is being turned into a gym.', 'Слышал? Старый кинотеатр переделывают в спортзал.'],
    ['C', 'Really? It was built in the 1930s! It should have been protected.', 'Правда? Его построили в 1930-х! Его надо было охранять.'],
    ['L', 'Apparently the plans were approved last year. It’s expected to open in March.', 'Говорят, планы утвердили в прошлом году. Открытие ожидается в марте.'],
    ['C', 'What a shame. Anyway, you look different. Have you had your hair cut?', 'Как жаль. Кстати, ты выглядишь по-другому. Подстриглась?'],
    ['L', 'Yes, I had it done on Saturday. And I’m getting my nails done tomorrow.', 'Да, в субботу. А завтра делаю маникюр.'],
    ['C', 'Very nice. I need to get my car serviced, but I haven’t had time.', 'Очень мило. Мне нужно отдать машину на обслуживание, но всё некогда.'],
    ['L', 'You should do it soon. It’s said that the garage on King Street is the best.', 'Сделай это поскорее. Говорят, автосервис на Кинг-стрит — лучший.'],
    ['C', 'Thanks. I’ll have it booked in for next week.', 'Спасибо. Запишу её на следующую неделю.'],
  ],
  test: [
    { q: 'A new school ___ in our town at the moment.', o: ['is built', 'is being built', 'has built', 'builds'], a: 1, c: 0, e: 'Процесс сейчас → is being + V3.' },
    { q: 'Ten houses ___ this year.', o: ['have been sold', 'have sold', 'has been sold', 'are selling'], a: 0, c: 0, e: 'Present Perfect Passive: have been + V3.' },
    { q: 'Your order ___ on Monday.', o: ['will deliver', 'will be deliver', 'is delivering', 'will be delivered'], a: 3, c: 0, e: 'Future Passive: will be + V3.' },
    { q: 'Phones ___ switched off during the exam.', o: ['must', 'must being', 'must be', 'must been'], a: 2, c: 1, e: 'Модальный пассив: must be + V3.' },
    { q: 'This problem ___ easily.', o: ['can be solved', 'can solved', 'can be solve', 'can solving'], a: 0, c: 1, e: 'can be + V3.' },
    { q: 'I ___ my hair cut yesterday.', o: ['cut', 'had', 'was', 'did'], a: 1, c: 2, e: 'Услуга → have something done: had my hair cut.' },
    { q: 'We’re going to get the kitchen ___.', o: ['paint', 'painting', 'to paint', 'painted'], a: 3, c: 2, e: 'get + предмет + V3.' },
    { q: 'He had his wallet ___ on the train.', o: ['steal', 'stolen', 'stole', 'stealing'], a: 1, c: 2, e: 'Неприятность: had + предмет + V3 (stolen).' },
    { q: '___ that the castle is haunted.', o: ['It says', 'They are said', 'It is said', 'It said'], a: 2, c: 3, e: 'Безличное мнение → It is said that…' },
    { q: 'She is thought ___ the best player in the team.', o: ['to be', 'being', 'that she is', 'be'], a: 0, c: 3, e: 'be thought + to + V.' },
  ],
  feynman: {
    task: 'Объясните пассив как «конструктор, где меняется только be», и разницу между <i>I cut my hair</i> и <i>I had my hair cut</i>, так, чтобы понял 10-летний ребёнок.',
    prompts: ['Как образовать пассив в Present Continuous и Present Perfect?', 'Почему <i>The house is built now</i> — ошибка, если стройка идёт?', 'Какие услуги вы заказываете? Назовите 5 через have / get something done.', 'Перескажите городской слух через <i>It is said that…</i>'],
  },
});
