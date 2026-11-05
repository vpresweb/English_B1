/* ===== WEEK 3 — Future Continuous, Future Perfect ===== */
COURSE.weeks.push({
  n: 3,
  title: 'Будущее: Future Continuous и Future Perfect',
  tag: 'will be doing · will have done · be about to · повторение will / going to',
  goal: 'Говорить о процессе в определённый момент будущего (will be doing), о том, что будет сделано к сроку (will have done), о том, что вот-вот случится (be about to). Уверенно выбирать между всеми формами будущего.',
  days: [
    ['Повторение A2', ['will, going to, Present Continuous для будущего', 'Present Simple для расписаний', 'Рассказать о планах на месяц тремя формами']],
    ['Теория — две новые точки в будущем', ['Прочитать раздел «Теория»: «в этот момент» и «к этому моменту»', 'Аналогия Фейнмана: фото из будущего и галочка в списке дел', 'Ответить: <i>What will you be doing at 8 pm tomorrow?</i>']],
    ['Future Continuous', ['will be + -ing', 'Процесс в момент будущего: <i>This time next week I’ll be lying on a beach.</i>', 'Вежливый вопрос о планах: <i>Will you be using the car tonight?</i>']],
    ['Future Perfect', ['will have + V3', '<i>by</i> + срок: <i>By 2030, I’ll have paid off my loan.</i>', 'Составить 6 целей: что вы сделаете к концу года']],
    ['Be about to и другие', ['<i>be about to</i> — вот-вот: <i>The film is about to start.</i>', '<i>be due to</i> — по графику: <i>The plane is due to land at 6.</i>', 'Разыграть диалог недели — обе роли']],
    ['Тест + закрепление', ['Пройти тест недели (раздел 🎯) — цель 80%+', 'Написать текст (~100 слов): <i>My life in ten years</i>', 'Использовать минимум 4 формы будущего']],
    ['Фейнман-урок недели', ['Запись 2–3 мин: шкала будущего от will до will have done', 'Таблица-шпаргалка «какое будущее когда»', 'Список пробелов → план недели 4 (модальные дедукции)']],
  ],
  progress: ['Future Continuous', 'Future Perfect', 'Be about to / due to', 'Выбор формы'],
  theory: `
    <h3>Идея в одной фразе</h3>
    <p><strong>Future Continuous</strong> — что будет <em>происходить</em> в определённый момент будущего. <strong>Future Perfect</strong> — что <em>уже будет сделано</em> к определённому моменту.</p>
    ${tl([['now', 'сейчас'], ['at 8 pm: I’ll be flying', 'в этот момент — процесс'], ['by 10 pm: I’ll have landed', 'к этому моменту — готово', 1]])}
    ${ex('At 8 pm tomorrow I’ll be flying to Rome.', 'Завтра в 8 вечера я буду лететь в Рим (в процессе).')}
    ${ex('By 10 pm I’ll have landed.', 'К 10 вечера я уже приземлюсь (будет сделано).')}
    <h3>Аналогия Фейнмана</h3>
    <p>Future Continuous — это <strong>фото из будущего</strong>: «вот я на пляже, лежу и читаю». Future Perfect — <strong>галочка в списке дел</strong>: «к пятнице — готово ✓».</p>
    ${note('<strong>Правило-проверка:</strong> есть момент будущего и вопрос «чем буду занят?» → will be doing. Есть срок с <i>by</i> и вопрос «что успею?» → will have done.')}`,
  forms: `
    <h3>Future Continuous: will be + -ing</h3>
    ${tbl(['', 'Пример'], [
      ['+', 'I’ll be working late tonight.'],
      ['−', 'She <em>won’t be coming</em> to the meeting.'],
      ['?', '<em>Will</em> you <em>be using</em> the printer?']])}
    <h3>Future Perfect: will have + V3</h3>
    ${tbl(['', 'Пример'], [
      ['+', 'By June, we’ll have finished the project.'],
      ['−', 'They <em>won’t have arrived</em> by then.'],
      ['?', '<em>Will</em> you <em>have read</em> it by Monday?']])}
    <h3>Ещё два способа</h3>
    ${tbl(['Форма', 'Значение', 'Пример'], [
      ['be about to + V', 'вот-вот, через секунды', 'Hurry up! The train is about to leave.'],
      ['be due to + V', 'по расписанию / плану', 'The new bridge is due to open in May.']])}`,
  usage: `
    <h3>Future Continuous: три работы</h3>
    ${ul(['Процесс в момент будущего: <i>Don’t call at 9 — I’ll be putting the kids to bed.</i>', 'Вежливый вопрос о планах (не просьба): <i>Will you be going to the shops later?</i>', 'Обычный ход событий: <i>I’ll be seeing Tom at work tomorrow anyway.</i>'])}
    <h3>Future Perfect с by</h3>
    ${ul(['<i>by Friday / by the end of the year / by the time you arrive</i>', '<i>By the time you get here, I’ll have cooked dinner.</i> — после by the time — Present Simple!', '<i>In two years, I’ll have saved enough for a car.</i>'])}
    ${note('<strong>Внимание:</strong> после <i>when, by the time, as soon as, before</i> будущее не ставится: <i>by the time you <em>arrive</em></i>, не <i>will arrive</i>.')}`,
  compare: `
    ${tbl(['Форма', 'Когда', 'Пример'], [
      ['will', 'решение сейчас, обещание, мнение', 'I’ll help you.'],
      ['going to', 'план, прогноз по признакам', 'I’m going to move.'],
      ['Present Continuous', 'договорённость', 'I’m meeting Jo at 6.'],
      ['will be doing', 'процесс в момент будущего', 'At 6 I’ll be driving.'],
      ['will have done', 'сделано к сроку', 'By 6 I’ll have finished.'],
      ['be about to', 'вот-вот', 'It’s about to rain.']])}
    <h3>Одна поездка — пять форм</h3>
    ${ex('I’m flying to Spain on Friday. My flight leaves at 7.', 'В пятницу лечу в Испанию. Вылет в 7 (договорённость + расписание).')}
    ${ex('At 9 I’ll be sitting on the beach, and by Sunday I’ll have forgotten about work!', 'В 9 я буду сидеть на пляже, а к воскресенью уже забуду о работе!')}
    ${note('<strong>Частая ошибка русскоговорящих:</strong> «завтра в 5 я буду работать» → <i>I will work at 5</i>. Если речь о процессе в момент — <i>I’ll be working at 5.</i>')}`,
  dialog: [
    ['S', 'Will you be using the car on Saturday?', 'Ты будешь пользоваться машиной в субботу?'],
    ['P', 'Yes, sorry. I’ll be driving Grandma to the airport in the morning.', 'Да, извини. Утром я буду везти бабушку в аэропорт.'],
    ['S', 'What time is her flight?', 'Во сколько у неё рейс?'],
    ['P', 'It’s due to leave at eleven, so we’ll have left the house by eight.', 'Вылет по расписанию в одиннадцать, так что мы уедем из дома к восьми.'],
    ['S', 'OK. Will you have got back by two? I need to pick up a sofa.', 'Ладно. Ты вернёшься к двум? Мне нужно забрать диван.'],
    ['P', 'Definitely. I’ll have got back by twelve at the latest.', 'Конечно. Я вернусь самое позднее к двенадцати.'],
    ['S', 'Great. Oh, look, the match is about to start!', 'Отлично. Ой, смотри, матч вот-вот начнётся!'],
    ['P', 'I’ll get the snacks. This time tomorrow we’ll be celebrating, I’m sure!', 'Я принесу закуски. Завтра в это время мы будем праздновать, я уверен!'],
  ],
  test: [
    { q: 'At 8 pm tomorrow I ___ to Rome.', o: ['will fly', 'will be flying', 'will have flown', 'fly'], a: 1, c: 0, e: 'Процесс в момент будущего → will be + -ing.' },
    { q: 'By June we ___ the project.', o: ['will finish', 'will be finishing', 'finish', 'will have finished'], a: 3, c: 1, e: 'by + срок → will have + V3.' },
    { q: 'Hurry! The train ___ leave.', o: ['is about to', 'will have', 'is due', 'about to'], a: 0, c: 2, e: 'Вот-вот → be about to + V.' },
    { q: 'The new museum ___ open next spring.', o: ['is about', 'is due to', 'will have', 'due to'], a: 1, c: 2, e: 'По плану, официально → be due to.' },
    { q: '___ you be using the printer this afternoon?', o: ['Are', 'Do', 'Will', 'Have'], a: 2, c: 0, e: 'Вежливый вопрос о планах: Will you be + -ing?' },
    { q: 'By the time you ___, I’ll have cooked dinner.', o: ['will arrive', 'arrive', 'will have arrived', 'are arriving'], a: 1, c: 3, e: 'После by the time — Present Simple.' },
    { q: 'She ___ to the party. She’s working that night.', o: ['won’t be coming', 'won’t have come', 'isn’t come', 'won’t to come'], a: 0, c: 0, e: 'Процесс/ход событий в будущем → won’t be coming.' },
    { q: 'In two years I ___ enough money for a car.', o: ['will save', 'am saving', 'will be saving', 'will have saved'], a: 3, c: 1, e: 'Результат к моменту будущего → will have saved.' },
    { q: 'It’s cold. — I ___ close the window. (решил сейчас)', o: ['will be', 'am going to', '’ll', '’ll have'], a: 2, c: 3, e: 'Спонтанное решение → will.' },
    { q: 'Don’t call me at 9. I ___ the children to bed.', o: ['will put', 'put', 'will have put', 'will be putting'], a: 3, c: 3, e: 'В 9 буду в процессе → will be putting.' },
  ],
  feynman: {
    task: 'Объясните «фото из будущего» (will be doing) и «галочку в списке» (will have done) так, чтобы понял 10-летний ребёнок.',
    prompts: ['Чем <i>At 6 I’ll be working</i> отличается от <i>By 6 I’ll have worked 8 hours</i>?', 'Почему <i>by the time you will arrive</i> — ошибка?', 'Когда говорят <i>be about to</i>, а когда <i>be due to</i>?', 'Опишите свой завтрашний день, используя 4 формы будущего.'],
  },
});
