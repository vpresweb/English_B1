/* ===== WEEK 7 — Reported speech: questions and reporting verbs ===== */
COURSE.weeks.push({
  n: 7,
  title: 'Косвенная речь: вопросы и глаголы пересказа',
  tag: 'asked if / where · Could you tell me…? · advised, promised, refused, suggested',
  goal: 'Пересказывать вопросы, просьбы и советы без ошибок в порядке слов, задавать вежливые косвенные вопросы и передавать смысл чужих слов точными глаголами: advise, promise, refuse, offer, warn, remind, suggest, admit, deny.',
  days: [
    ['Повторение A2', ['said / told, шаг назад во времени', 'today → that day, here → there', 'Пересказать 6 фраз из вчерашнего разговора']],
    ['Теория — вопрос без вопроса', ['Прочитать раздел «Теория»: прямой порядок слов в косвенном вопросе', 'Аналогия Фейнмана: вопрос, «уложенный в коробку»', 'Перевести 5 прямых вопросов в косвенные']],
    ['Сдвиг времён B1', ['Present Perfect → Past Perfect, Past Simple → Past Perfect', 'must → had to, may → might', 'Когда сдвиг не нужен: факт всё ещё верен']],
    ['Вежливые вопросы', ['<i>Could you tell me where the station is?</i>', '<i>Do you know if…? I wonder whether…</i>', 'Задать 8 вежливых вопросов в магазине и на вокзале']],
    ['Глаголы пересказа', ['+ to: <i>promise, refuse, offer, agree</i>', '+ кому + to: <i>advise, warn, remind, ask, tell</i>', '+ -ing: <i>suggest, admit, deny</i>']],
    ['Тест + закрепление', ['Пройти тест недели (раздел 🎯) — цель 80%+', 'Разыграть диалог недели — обе роли', 'Написать e-mail (~100 слов): перескажите разговор с начальником']],
    ['Фейнман-урок недели', ['Запись 2–3 мин: «вопрос в коробке»', 'Шпаргалка: 10 глаголов пересказа и их схемы', 'Список пробелов → план недели 8 (относительные предложения B1)']],
  ],
  progress: ['Сдвиг времён', 'Косвенные вопросы', 'Глаголы пересказа', 'Вежливые вопросы'],
  theory: `
    <h3>Идея в одной фразе</h3>
    <p>В косвенном вопросе <strong>нет вопросительного порядка слов и нет do / does / did</strong>. Вопрос превращается в обычное утверждение после <i>asked</i>, <i>wanted to know</i> или <i>Could you tell me…</i></p>
    ${ex('"Where do you live?" → She asked me where I lived.', '«Где ты живёшь?» → Она спросила, где я живу.')}
    ${ex('"Are you hungry?" → He asked if I was hungry.', '«Ты голоден?» → Он спросил, голоден ли я.')}
    <h3>Аналогия Фейнмана</h3>
    <p>Представьте, что вопрос <strong>кладут в коробку</strong> и передают дальше. В коробке он перестаёт быть вопросом: <i>do</i> выпадает, а слова встают по порядку, как в обычном предложении: <i>where I lived</i>, а не <i>where did I live</i>.</p>
    ${note('<strong>Правило-проверка:</strong> после <i>asked / wonder / Could you tell me / Do you know</i> — порядок «подлежащее + глагол»: <i>where the station <em>is</em></i>, не <i>where is the station</i>.')}
    <h3>Да / нет → if или whether</h3>
    ${ex('"Do you speak French?" → She asked whether I spoke French.', '«Вы говорите по-французски?» → Она спросила, говорю ли я по-французски.')}`,
  forms: `
    <h3>Сдвиг времён</h3>
    ${tbl(['Прямая речь', 'Косвенная речь'], [
      ['Present Simple: "I work here."', 'Past Simple: he said he <em>worked</em> there.'],
      ['Present Continuous: "I’m leaving."', 'Past Continuous: she said she <em>was leaving</em>.'],
      ['Present Perfect: "I’ve finished."', 'Past Perfect: he said he <em>had finished</em>.'],
      ['Past Simple: "I saw it."', 'Past Perfect: she said she <em>had seen</em> it.'],
      ['will / can', 'would / could'],
      ['must / may', 'had to / might']])}
    <h3>Вопросы</h3>
    ${tbl(['Прямой вопрос', 'Косвенный'], [
      ['"What time is it?"', 'He asked what time <em>it was</em>.'],
      ['"Where did you go?"', 'She asked where <em>I had gone</em>.'],
      ['"Can you help me?"', 'He asked <em>if I could</em> help him.'],
      ['"Have you seen Tom?"', 'She asked <em>whether I had seen</em> Tom.']])}`,
  usage: `
    <h3>Глаголы пересказа</h3>
    ${tbl(['Схема', 'Глаголы', 'Пример'], [
      ['+ to + V', 'promise, refuse, offer, agree, threaten', 'He <em>promised to call</em> me.'],
      ['+ кому + to + V', 'advise, warn, remind, ask, tell, invite', 'She <em>advised me to see</em> a doctor.'],
      ['+ -ing', 'suggest, admit, deny, recommend', 'He <em>admitted taking</em> the money.'],
      ['+ that', 'explain, complain, agree, suggest', 'She <em>explained that</em> the train was late.']])}
    ${note('<strong>Ловушка:</strong> <i>suggest</i> не бывает с <i>to</i>: <i>He suggested going</i> или <i>He suggested that we go</i>, но не <i>He suggested me to go</i>.')}
    <h3>Вежливые косвенные вопросы</h3>
    ${ul(['<i>Could you tell me where the toilets are?</i>', '<i>Do you know if the shop is open on Sundays?</i>', '<i>I was wondering whether you could help me.</i>', '<i>Would you mind telling me how much it costs?</i>'])}`,
  compare: `
    ${tbl(['', 'Прямой вопрос', 'Косвенный вопрос'], [
      ['Порядок', 'вопросительный', 'как в утверждении'],
      ['do / does / did', 'есть', 'нет'],
      ['Знак', '?', 'точка (кроме Could you tell me…?)'],
      ['Пример', 'Where is the bank?', 'Can you tell me where the bank is?']])}
    <h3>Said или точный глагол</h3>
    ${ex('"I’ll definitely help you." → He promised to help me.', 'Точнее, чем <i>He said he would help me.</i>')}
    ${ex('"I didn’t break it!" → She denied breaking it.', 'Она отрицала, что разбила это.')}
    ${note('<strong>Частые ошибки русскоговорящих:</strong> <i>She asked me where do I live</i> → <i>where I lived</i>. <i>Can you tell me where is the station?</i> → <i>where the station is</i>. <i>He suggested me to go</i> → <i>He suggested going</i>.')}`,
  dialog: [
    ['M', 'So, how was your meeting with the manager?', 'Ну как прошла встреча с менеджером?'],
    ['V', 'Interesting. She asked me how long I had been working here.', 'Интересно. Она спросила, как долго я здесь работаю.'],
    ['M', 'And did she ask whether you wanted a promotion?', 'А спросила, хочешь ли ты повышения?'],
    ['V', 'Yes! She asked if I would be interested in leading the new team.', 'Да! Спросила, будет ли мне интересно возглавить новую команду.'],
    ['M', 'That’s fantastic! What did you say?', 'Это потрясающе! И что ты ответил?'],
    ['V', 'I agreed to think about it. She advised me to talk to my family first.', 'Я согласился подумать. Она посоветовала мне сначала поговорить с семьёй.'],
    ['M', 'Do you know when they want an answer?', 'Ты знаешь, когда им нужен ответ?'],
    ['V', 'She reminded me to reply by Friday, and she suggested meeting again next week.', 'Она напомнила ответить до пятницы и предложила встретиться снова на следующей неделе.'],
  ],
  test: [
    { q: '"Where do you live?" → She asked me where ___.', o: ['do I live', 'I lived', 'did I live', 'I do live'], a: 1, c: 1, e: 'Косвенный вопрос: прямой порядок, без do, шаг назад.' },
    { q: '"Are you tired?" → He asked ___ I was tired.', o: ['that', 'what', 'if', 'do'], a: 2, c: 1, e: 'Вопрос да/нет → if / whether.' },
    { q: '"I’ve finished." → She said she ___.', o: ['had finished', 'has finished', 'finished already', 'was finish'], a: 0, c: 0, e: 'Present Perfect → Past Perfect.' },
    { q: '"You must wear a helmet." → He said I ___ wear a helmet.', o: ['must to', 'have to', 'had', 'had to'], a: 3, c: 0, e: 'must → had to.' },
    { q: 'Could you tell me where ___?', o: ['the station is', 'is the station', 'the station be', 'does the station'], a: 0, c: 3, e: 'Вежливый вопрос: прямой порядок слов.' },
    { q: 'Do you know ___ the shop is open on Sunday?', o: ['that', 'if', 'what', 'does'], a: 1, c: 3, e: 'Да/нет внутри вопроса → if / whether.' },
    { q: 'He promised ___ me back.', o: ['calling', 'that call', 'to call', 'call'], a: 2, c: 2, e: 'promise + to + V.' },
    { q: 'She advised ___ a doctor.', o: ['me to see', 'to me see', 'me seeing', 'that me see'], a: 0, c: 2, e: 'advise + кому + to + V.' },
    { q: 'He suggested ___ by train.', o: ['me to go', 'to go', 'go', 'going'], a: 3, c: 2, e: 'suggest + -ing (без кому + to).' },
    { q: '"I didn’t take the money!" → He denied ___ the money.', o: ['to take', 'taking', 'take', 'that take'], a: 1, c: 2, e: 'deny + -ing.' },
  ],
  feynman: {
    task: 'Объясните «вопрос в коробке» — почему в косвенном вопросе нет do и вопросительного порядка — так, чтобы понял 10-летний ребёнок.',
    prompts: ['Как вежливо спросить дорогу к вокзалу через Could you tell me…?', 'Чем if отличается от that в косвенной речи?', 'Какие глаголы пересказа идут с to, а какие с -ing?', 'Перескажите свой последний важный разговор 5 разными глаголами.'],
  },
});
