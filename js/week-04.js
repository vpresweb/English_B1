/* ===== WEEK 4 — Modals of deduction, past modals ===== */
COURSE.weeks.push({
  n: 4,
  title: 'Модальные глаголы: догадки и сожаления',
  tag: 'must / might / can’t be · must have done · should have done',
  goal: 'Делать выводы и догадки о настоящем и прошлом с разной степенью уверенности (must, might, could, can’t), выражать сожаление и критику прошлых действий (should have, could have, needn’t have).',
  days: [
    ['Теория — «детектив»', ['Прочитать раздел «Теория»: шкала уверенности от can’t до must', 'Аналогия Фейнмана: Шерлок Холмс и улики', 'Посмотреть на 5 фото людей и сделать догадки: <i>She must be a doctor.</i>']],
    ['Дедукция о настоящем', ['must be (почти уверен «да»), can’t be (почти уверен «нет»)', 'might / may / could be (может быть)', 'Игра «Кто я?»: 8 догадок по подсказкам']],
    ['Дедукция о прошлом', ['must / might / can’t + have + V3', '<i>He must have missed the bus.</i>', 'Объяснить 5 загадочных ситуаций: почему друг не пришёл?']],
    ['Сожаление и критика', ['<i>should have done</i> — надо было (но не сделал)', '<i>could have done</i> — мог бы (была возможность)', '<i>needn’t have done</i> — зря сделал (не было нужно)']],
    ['Диалог и аудирование', ['Разыграть диалог «Where are my keys?» — обе роли', 'Послушать детективный подкаст или сцену из сериала и найти must have / can’t have', 'Рассказать о 3 своих сожалениях с should have']],
    ['Тест + закрепление', ['Пройти тест недели (раздел 🎯) — цель 80%+', 'Написать историю (~100 слов) с загадкой и догадками', 'Проверить: после модального — have + V3, а не had']],
    ['Фейнман-урок недели', ['Запись 2–3 мин: шкала уверенности «как ребёнку»', 'Таблица: настоящее vs прошлое для must / might / can’t', 'Список пробелов → план недели 5 (третий тип условий)']],
  ],
  progress: ['Догадки о настоящем', 'Догадки о прошлом', 'Should / could have', 'Шкала уверенности'],
  theory: `
    <h3>Идея в одной фразе</h3>
    <p>Модальные глаголы умеют не только «можно / нужно», но и <strong>«наверное, точно, не может быть»</strong>. Это язык выводов по уликам.</p>
    ${tl([['can’t be', '≈ 0%: точно нет'], ['might / could be', '≈ 50%: может быть'], ['must be', '≈ 95%: точно да', 1]])}
    ${ex('The lights are on. They must be at home.', 'Свет горит. Наверняка они дома.')}
    ${ex('He’s only 15. He can’t be a doctor.', 'Ему всего 15. Не может быть, что он врач.')}
    <h3>Аналогия Фейнмана</h3>
    <p>Вы — <strong>Шерлок Холмс</strong>. Улика (свет горит) → вывод с уверенностью (must be). Для прошлого Холмс добавляет <i>have + V3</i>: <i>The window is broken. Someone must have thrown a stone.</i></p>
    ${note('<strong>Важно:</strong> противоположность <i>must be</i> в смысле догадки — <i>can’t be</i>, а не <i>mustn’t be</i>. <i>Mustn’t</i> — это запрет.')}`,
  forms: `
    <h3>Настоящее и прошлое</h3>
    ${tbl(['Уверенность', 'Настоящее', 'Прошлое'], [
      ['почти точно да', 'must be / must be doing', 'must <em>have been</em> / must <em>have done</em>'],
      ['возможно', 'might / may / could be', 'might / may / could <em>have done</em>'],
      ['почти точно нет', 'can’t / couldn’t be', 'can’t / couldn’t <em>have done</em>']])}
    <h3>Сожаления и критика</h3>
    ${tbl(['Форма', 'Значение', 'Пример'], [
      ['should have + V3', 'надо было (а я не сделал)', 'I should have studied harder.'],
      ['shouldn’t have + V3', 'не надо было (а я сделал)', 'You shouldn’t have eaten so much.'],
      ['could have + V3', 'мог бы (но не сделал)', 'You could have told me!'],
      ['needn’t have + V3', 'зря сделал, не было нужно', 'I needn’t have brought an umbrella.']])}
    ${note('<strong>Произношение:</strong> <i>must have</i> → [ˈmʌstəv], <i>should have</i> → [ˈʃʊdəv]. Поэтому носители иногда ошибочно пишут <i>should of</i> — это неправильно.')}`,
  usage: `
    <h3>Типичные ситуации</h3>
    ${ul(['Звонок в дверь: <i>That’ll be the postman. / It might be Sam.</i>', 'Человек не пришёл: <i>He must have forgotten. / He might have got lost.</i>', 'Невероятная новость: <i>You can’t be serious! / She can’t have said that!</i>', 'Совет задним числом: <i>You should have called the police.</i>'])}
    <h3>Must be doing — процесс сейчас</h3>
    ${ex('Don’t call her now. She must be sleeping.', 'Не звони ей сейчас. Она, наверное, спит.')}
    <h3>Needn’t have и didn’t need to</h3>
    ${ex('I needn’t have cooked — they’d already eaten.', 'Зря я готовил — они уже поели (готовил, но было не нужно).')}
    ${ex('I didn’t need to cook, so I went out.', 'Мне не нужно было готовить, так что я ушёл (и не готовил).')}`,
  compare: `
    ${tbl(['', 'must', 'might', 'can’t'], [
      ['Настоящее', 'She must be tired.', 'She might be tired.', 'She can’t be tired.'],
      ['Прошлое', 'She must have been tired.', 'She might have been tired.', 'She can’t have been tired.'],
      ['Рус.', 'Наверняка устала.', 'Может, устала.', 'Не может быть, что устала.']])}
    <h3>Should have и could have</h3>
    ${ex('You should have told me.', 'Тебе следовало мне сказать (упрёк).')}
    ${ex('You could have told me.', 'Ты мог бы мне сказать (была возможность, жаль, что нет).')}
    ${note('<strong>Частые ошибки русскоговорящих:</strong> <i>He must had forgotten</i> → <i>must <em>have</em> forgotten</i>. И <i>mustn’t be</i> вместо <i>can’t be</i> для «не может быть».')}`,
  dialog: [
    ['R', 'Where are my keys? I can’t find them anywhere.', 'Где мои ключи? Нигде не могу найти.'],
    ['T', 'You must have left them at work.', 'Ты, наверное, оставил их на работе.'],
    ['R', 'I can’t have left them at work. I used them to open the door!', 'Не мог я их оставить на работе. Я открыл ими дверь!'],
    ['T', 'Then they must be somewhere in the flat. Have you checked your coat?', 'Тогда они точно где-то в квартире. Ты проверил куртку?'],
    ['R', 'Yes. They might have fallen behind the sofa, I suppose.', 'Да. Наверное, могли упасть за диван.'],
    ['T', 'Look, here they are, in the fridge! You must have been really tired last night.', 'Смотри, вот они, в холодильнике! Ты, видно, вчера очень устал.'],
    ['R', 'In the fridge? I should have gone to bed earlier.', 'В холодильнике? Надо было ложиться раньше.'],
    ['T', 'You could have asked me — I saw you put the milk away!', 'Мог бы спросить меня — я видел, как ты убирал молоко!'],
  ],
  test: [
    { q: 'The lights are on. They ___ at home.', o: ['must be', 'can’t be', 'mustn’t be', 'should be'], a: 0, c: 0, e: 'Улика → уверенный вывод: must be.' },
    { q: 'He’s only 12. He ___ a pilot.', o: ['mustn’t be', 'can’t be', 'might be', 'must be'], a: 1, c: 3, e: 'Почти точно «нет» → can’t be (не mustn’t).' },
    { q: 'I’m not sure where Ann is. She ___ in the garden.', o: ['must be', 'can’t be', 'might be', 'should have been'], a: 2, c: 0, e: 'Не уверен, 50% → might be.' },
    { q: 'He didn’t come. He ___ forgotten about the meeting.', o: ['must had', 'must have', 'must', 'must has'], a: 1, c: 1, e: 'Догадка о прошлом → must have + V3.' },
    { q: 'She ___ said that! She’s always so polite.', o: ['can’t have', 'must have', 'should have', 'needn’t have'], a: 0, c: 1, e: 'Не может быть, что сказала → can’t have + V3.' },
    { q: 'I failed the exam. I ___ studied harder.', o: ['must have', 'can’t have', 'needn’t have', 'should have'], a: 3, c: 2, e: 'Сожаление «надо было» → should have.' },
    { q: 'You ___ told me! I would have helped.', o: ['could have', 'must have', 'can’t have', 'mustn’t have'], a: 0, c: 2, e: 'Была возможность, жаль, что нет → could have.' },
    { q: 'I ___ brought an umbrella. It didn’t rain at all.', o: ['shouldn’t', 'mustn’t have', 'needn’t have', 'can’t have'], a: 2, c: 2, e: 'Зря сделал, не было нужно → needn’t have.' },
    { q: 'Don’t call her now. She ___ sleeping.', o: ['must have', 'must be', 'can be', 'must'], a: 1, c: 0, e: 'Процесс сейчас → must be + -ing.' },
    { q: 'Which is about 50% sure?', o: ['must', 'can’t', 'will', 'might'], a: 3, c: 3, e: 'might / may / could — «может быть».' },
  ],
  feynman: {
    task: 'Объясните «шкалу уверенности» (can’t — might — must) и как перенести её в прошлое, так, чтобы понял 10-летний ребёнок.',
    prompts: ['Почему противоположность <i>must be</i> — <i>can’t be</i>, а не <i>mustn’t be</i>?', 'Как сказать «он, наверное, опоздал на автобус»?', 'Чем <i>should have</i> отличается от <i>could have</i>?', 'Расскажите о 3 вещах, которые вам надо было сделать иначе.'],
  },
});
