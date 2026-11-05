/* ===== WEEK 12 — B1 Preliminary exam ===== */
COURSE.weeks.push({
  n: 12,
  title: 'B1 Preliminary — подготовка к экзамену',
  tag: 'Итоговое повторение · формат · симуляция · стратегия',
  goal: 'Знать формат экзамена Cambridge B1 Preliminary, пройти полную симуляцию, повторить всю грамматику курса и составить личную стратегию на день экзамена.',
  days: [
    ['Формат экзамена', ['Изучить структуру B1 Preliminary (раздел «Теория»)', 'Скачать бесплатные образцы заданий на сайте Cambridge English', 'Засечь время: Reading — 45 минут']],
    ['Reading', ['Решить образец Reading (6 частей)', 'Тренировать поиск синонимов и перефразирования', 'Разобрать каждую ошибку: почему другой вариант неверен?']],
    ['Writing', ['E-mail (Part 1) по четырём пунктам — 45 минут на обе части', 'Статья или история (Part 2)', 'Проверить тексты по чек-листу недели 11']],
    ['Listening', ['Образец Listening (≈30 мин, 4 части)', 'Слушать BBC 6 Minute English по 20 минут', 'Записывать ключевые слова во время первого прослушивания']],
    ['Speaking', ['Part 1: о себе; Part 2: описание фото (1 минута)', 'Part 3: обсуждение с партнёром; Part 4: общие вопросы', 'Записать себя на видео и пересмотреть']],
    ['Грамматика и симуляция', ['Повторить шпаргалку из раздела «Формы»', 'Итоговый тест (раздел 🎯)', 'Все части подряд с таймером, самооценка']],
    ['Фейнман-урок курса', ['Объяснить всю грамматику B1 за 10 минут', 'Одна страница-шпаргалка', 'План на уровень B2 (B2 First)']],
  ],
  progress: ['Формат', 'Грамматика: времена', 'Грамматика: структуры', 'Стратегия'],
  theory: `
    <h3>Что такое B1 Preliminary</h3>
    <p><b>B1 Preliminary</b> (раньше — PET, Preliminary English Test) — экзамен Cambridge English уровня <b>B1</b>. Подтверждает, что вы справляетесь с повседневным общением, понимаете основное в текстах и разговорах, можете написать письмо и рассказать о своих планах и опыте.</p>
    ${tbl(['Часть', 'Что проверяют', 'Время (ориентир.)'], [
      ['Reading', '6 частей: объявления, тексты, пропуски', '≈ 45 мин'],
      ['Writing', 'e-mail (~100 слов) + статья или история (~100 слов)', '≈ 45 мин'],
      ['Listening', '4 части: короткие записи, интервью, разговоры', '≈ 30 мин'],
      ['Speaking', 'В паре: о себе, описание фото, обсуждение, общие вопросы', '≈ 12–17 мин']])}
    ${tbl(['Балл (Cambridge English Scale)', 'Результат'], [
      ['160–170', 'Grade A — уровень B2'],
      ['153–159', 'Grade B — уровень B1'],
      ['140–152', 'Grade C — уровень B1'],
      ['120–139', 'сертификат уровня A2']])}
    ${note('<strong>Проверьте актуальные данные</strong> (время, части, баллы, цены и даты) на официальном сайте Cambridge English и в местном экзаменационном центре — формат может обновляться.')}
    ${note('<strong>Если нужен экзамен для визы или гражданства Великобритании:</strong> для некоторых решений требуется тест B1 по говорению и аудированию у одобренного провайдера (SELT). B1 Preliminary в этот список обычно не входит — проверьте актуальный список на gov.uk.')}
    <h3>Аналогия Фейнмана</h3>
    <p>Экзамен — это не проверка «всего, что вы знаете», а проверка <strong>того, что вы умеете сделать с языком</strong>: понять статью, ответить на письмо, поддержать разговор. Тренируйте задачи, а не правила.</p>`,
  forms: `
    <h3>Шпаргалка по всей грамматике курса</h3>
    ${tbl(['Тема', 'Формула', 'Пример'], [
      ['Past Perfect', 'had + V3', 'The train had left.'],
      ['Present Perfect Continuous', 'have been + -ing', 'I’ve been waiting for ages.'],
      ['Future Continuous / Perfect', 'will be -ing / will have V3', 'By May I’ll have finished.'],
      ['Догадки', 'must / might / can’t (have V3)', 'He must have forgotten.'],
      ['Сожаления', 'should / could have V3', 'I should have called.'],
      ['Third conditional', 'If + had V3, would have V3', 'If I’d known, I’d have come.'],
      ['Wish', 'wish + Past / Past Perfect', 'I wish I had more time.'],
      ['Passive', 'be (любое время) + V3', 'It’s being repaired.'],
      ['Have something done', 'have + предмет + V3', 'I had my hair cut.'],
      ['Косвенные вопросы', 'asked + if / wh- + прямой порядок', 'She asked where I lived.'],
      ['Relative clauses', 'who / which / whose; запятые', 'My sister, who lives in Spain, …'],
      ['be / get used to', '+ -ing', 'I’m used to working nights.'],
      ['Связки', 'despite + сущ.; although + предлож.', 'Despite the rain, we went.']])}`,
  usage: `
    <h3>Стратегия на экзамене</h3>
    ${ul(['<b>Reading:</b> сначала вопросы, потом текст; правильный ответ почти всегда перефразирован, а не повторён дословно.', '<b>Writing:</b> 5 минут на план, 15 минут на каждый текст, 5 минут на проверку времён и связок. Ответьте на все пункты.', '<b>Listening:</b> каждая запись звучит дважды. Читайте вопросы заранее, в первый раз — общий смысл, во второй — проверка.', '<b>Speaking:</b> говорите с партнёром, а не только с экзаменатором; соглашайтесь и спорьте: <i>I see what you mean, but…</i>'])}
    <h3>Полезные фразы для Speaking</h3>
    ${ul(['<i>In this photo I can see… It looks like… They might be…</i>', '<i>What do you think about…? Shall we decide on…?</i>', '<i>I agree with you. / I’m not so sure about that because…</i>', '<i>Sorry, could you say that again, please?</i>'])}
    <h3>Полезные фразы для Writing</h3>
    ${ul(['<i>Thanks for your email. I’m really pleased that…</i>', '<i>In my opinion, … because… For example, …</i>', '<i>However, … / On the other hand, …</i>', '<i>All in all, … / In the end, …</i>'])}`,
  compare: `
    <h3>Топ-10 ошибок русскоговорящих на B1</h3>
    ${tbl(['Ошибка', 'Правильно'], [
      ['I am waiting for you for an hour.', 'I’<em>ve been waiting</em> for you for an hour.'],
      ['When I came, they already left.', 'When I came, they <em>had</em> already left.'],
      ['If I would have known, I would come.', 'If I <em>had known</em>, I <em>would have come</em>.'],
      ['He mustn’t be at home — the lights are off.', 'He <em>can’t</em> be at home.'],
      ['She asked me where do I live.', 'She asked me where <em>I lived</em>.'],
      ['He suggested me to go.', 'He suggested <em>going</em>.'],
      ['My father, that is a pilot, …', 'My father, <em>who</em> is a pilot, …'],
      ['I’m used to get up early.', 'I’m used to <em>getting</em> up early.'],
      ['Despite it was raining, …', '<em>Although</em> it was raining, … / Despite <em>the rain</em>, …'],
      ['I cut my hair at the hairdresser’s.', 'I <em>had</em> my hair cut.']])}`,
  dialog: [
    ['E', 'Now, I’d like you to talk together about these activities for a school trip.', 'А теперь обсудите вместе эти варианты школьной поездки.'],
    ['A', 'Shall we start with the museum? I think it would be interesting, although some students might find it boring.', 'Начнём с музея? Думаю, это было бы интересно, хотя некоторым ученикам может быть скучно.'],
    ['B', 'I see what you mean. Personally, I’d prefer the outdoor centre, because you can try new sports.', 'Понимаю, о чём ты. Лично я бы выбрала центр активного отдыха, там можно попробовать новые виды спорта.'],
    ['A', 'That’s true. However, it depends on the weather. If it rained, the trip would be ruined.', 'Это правда. Однако всё зависит от погоды. Если бы пошёл дождь, поездка была бы испорчена.'],
    ['B', 'Good point. What about the theatre? I went last year and I’d never seen anything like it.', 'Справедливо. А как насчёт театра? Я была в прошлом году, никогда не видела ничего подобного.'],
    ['A', 'It’s a great idea, but it might be too expensive for some families.', 'Отличная идея, но для некоторых семей это может быть слишком дорого.'],
    ['B', 'So, shall we decide? I think the museum is the best option because everyone can enjoy it.', 'Ну что, решим? Я думаю, музей — лучший вариант, потому что он понравится всем.'],
    ['A', 'I agree. Sorry, could you repeat the last part of the question, please?', 'Согласен. Извините, не могли бы вы повторить последнюю часть вопроса?'],
  ],
  test: [
    { q: 'How many papers (parts) does B1 Preliminary have?', o: ['two', 'three', 'four', 'five'], a: 2, c: 0, e: 'Reading, Writing, Listening, Speaking.' },
    { q: 'When I arrived, the meeting ___.', o: ['already finished', 'has already finished', 'had already finished', 'was already finish'], a: 2, c: 1, e: 'Раньше другого прошедшего → Past Perfect (неделя 1).' },
    { q: 'I ___ English for three years.', o: ['am learning', 'learn', 'was learning', 'have been learning'], a: 3, c: 1, e: 'Процесс до сих пор → Present Perfect Continuous (неделя 2).' },
    { q: 'By next June I ___ my degree.', o: ['will have finished', 'will finish', 'finish', 'am finishing'], a: 0, c: 1, e: 'by + срок → Future Perfect (неделя 3).' },
    { q: 'If I ___ about the party, I would have come.', o: ['knew', 'had known', 'would know', 'have known'], a: 1, c: 2, e: 'Third conditional (неделя 5).' },
    { q: 'She asked me where ___.', o: ['do I work', 'did I work', 'I worked', 'I do work'], a: 2, c: 2, e: 'Косвенный вопрос: прямой порядок (неделя 7).' },
    { q: 'I’m not used to ___ on the left.', o: ['drive', 'driving', 'drove', 'be driving'], a: 1, c: 2, e: 'be used to + -ing (неделя 9).' },
    { q: '___ the traffic, we arrived on time.', o: ['Although', 'However', 'Because', 'Despite'], a: 3, c: 2, e: 'Перед существительным → despite (неделя 11).' },
    { q: 'In Speaking Part 3, you should mainly…', o: ['talk only to the examiner', 'stay silent while your partner speaks', 'discuss the task with your partner', 'read a prepared text'], a: 2, c: 3, e: 'Part 3 — обсуждение с партнёром: соглашайтесь, спорьте, предлагайте.' },
    { q: 'In Reading, the correct answer is usually…', o: ['the same words as in the text', 'the longest option', 'always option A', 'a paraphrase of the text'], a: 3, c: 3, e: 'Ищите перефразирование и синонимы.' },
  ],
  feynman: {
    task: 'Итоговый урок: объясните всю грамматику B1 за 10 минут.',
    prompts: ['Как выбрать между Past Simple, Past Continuous и Past Perfect в истории?', 'Как устроены четыре типа условий и wish?', 'Какие три ошибки вы делали чаще всего за курс и как их больше не делать?', 'Что вы будете делать в первые 5 минут каждой части экзамена?'],
  },
});
