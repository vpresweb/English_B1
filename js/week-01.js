/* ===== WEEK 1 — Narrative tenses: Past Perfect ===== */
COURSE.weeks.push({
  n: 1,
  title: 'Повествовательные времена · Past Perfect',
  tag: 'Прошедшее до прошедшего · had + V3 · by the time / already',
  goal: 'Рассказывать историю тремя прошедшими временами: Past Simple (события), Past Continuous (фон) и Past Perfect (что случилось ещё раньше). Использовать by the time, already, before, after, just в нарративе.',
  days: [
    ['Повторение A2', ['Past Simple и Past Continuous: событие и фон', 'Повторить 40 неправильных глаголов (V2 и V3)', 'Рассказать вслух историю из прошлых выходных']],
    ['Теория — «флешбэк»', ['Прочитать раздел «Теория»: Past Perfect на шкале', 'Аналогия Фейнмана: флешбэк в кино', 'Выписать 5 ситуаций из своей жизни: «к тому моменту я уже…»']],
    ['Формы Past Perfect', ['had + V3 для всех лиц; сокращение <i>I’d</i>', 'Отрицание <i>hadn’t</i>, вопрос <i>Had you…?</i>', 'Проспрягать 10 глаголов в трёх формах']],
    ['Маркеры', ['<i>by the time, already, just, before, after, never … before</i>', 'Когда Past Perfect не нужен: порядок ясен из before / after', 'Составить 8 предложений с маркерами']],
    ['Диалог и аудирование', ['Разыграть диалог «What had happened?» — обе роли', 'Послушать короткий рассказ (BBC Learning English, Drama) и найти три времени', 'Пересказать историю за 2 минуты']],
    ['Тест + закрепление', ['Пройти тест недели (раздел 🎯) — цель 80%+', 'Написать историю (~100 слов) для B1 Writing Part 2: <i>It was the worst day of my life…</i>', 'Подчеркнуть три времени разными цветами']],
    ['Фейнман-урок недели', ['Запись 2–3 мин: объяснить три прошедших времени «как ребёнку»', 'Нарисовать шкалу: Past Perfect → Past Simple / Continuous → now', 'Список пробелов → план недели 2 (Present Perfect Continuous)']],
  ],
  progress: ['Формы Past Perfect', 'Три времени в истории', 'Маркеры', 'Неправильные глаголы'],
  theory: `
    <h3>Идея в одной фразе</h3>
    <p>Past Perfect — это <strong>«прошедшее до прошедшего»</strong>. Когда история уже идёт в прошлом и нужно показать, что что-то случилось <em>ещё раньше</em>, берём had + V3.</p>
    ${tl([['the train had left', 'ещё раньше', 1], ['I arrived', 'событие истории'], ['now', 'сейчас']])}
    ${ex('When I arrived at the station, the train had already left.', 'Когда я пришёл на вокзал, поезд уже ушёл (ушёл раньше, чем я пришёл).')}
    <h3>Аналогия Фейнмана</h3>
    <p>История в прошлом — это фильм. Past Simple — кадры, которые идут один за другим. Past Continuous — декорации и фон. Past Perfect — <strong>флешбэк</strong>: камера на секунду отматывает назад и показывает, что уже произошло до текущей сцены.</p>
    ${note('<strong>Правило-проверка:</strong> рассказ идёт в прошлом, и по-русски можно вставить «к тому моменту уже…»? Нужен Past Perfect.')}
    <h3>Три времени — три роли</h3>
    ${ul(['<b>Past Simple</b> — главные события: <i>I opened the door.</i>', '<b>Past Continuous</b> — фон: <i>It was raining.</i>', '<b>Past Perfect</b> — то, что было ещё раньше: <i>Someone had broken the window.</i>'])}
    ${ex('It was raining. I opened the door and saw that someone had broken the window.', 'Шёл дождь. Я открыл дверь и увидел, что кто-то разбил окно.')}`,
  forms: `
    <h3>Past Perfect: had + V3</h3>
    ${tbl(['', 'Пример', 'Рус.'], [
      ['+', 'I’d (I had) finished.', 'Я (уже) закончил.'],
      ['−', 'She <em>hadn’t</em> seen it before.', 'Она раньше этого не видела.'],
      ['?', '<em>Had</em> they <em>left</em>?', 'Они (уже) ушли?']])}
    ${note('<strong>Внимание:</strong> <i>I’d</i> бывает <i>I had</i> и <i>I would</i>. После <i>I’d</i> идёт V3 — это had: <i>I’d gone</i>; идёт инфинитив — would: <i>I’d go</i>.')}
    <h3>Неправильные глаголы для историй</h3>
    ${tbl(['V1', 'V2', 'V3', 'V1', 'V2', 'V3'], [
      ['begin', 'began', '<em>begun</em>', 'hide', 'hid', '<em>hidden</em>'],
      ['break', 'broke', '<em>broken</em>', 'ring', 'rang', '<em>rung</em>'],
      ['drive', 'drove', '<em>driven</em>', 'shake', 'shook', '<em>shaken</em>'],
      ['fall', 'fell', '<em>fallen</em>', 'steal', 'stole', '<em>stolen</em>'],
      ['forget', 'forgot', '<em>forgotten</em>', 'throw', 'threw', '<em>thrown</em>'],
      ['freeze', 'froze', '<em>frozen</em>', 'wake', 'woke', '<em>woken</em>']])}`,
  usage: `
    <h3>Маркеры</h3>
    ${tbl(['Маркер', 'Пример'], [
      ['by the time', 'By the time we arrived, the film <em>had started</em>.'],
      ['already', 'She <em>had already eaten</em> when I called.'],
      ['just', 'I <em>had just got</em> home when it started to snow.'],
      ['never … before', 'I <em>had never seen</em> the sea before that trip.'],
      ['because', 'He was tired because he <em>had worked</em> all night.']])}
    <h3>Когда Past Perfect не обязателен</h3>
    <p>Если порядок и так ясен из <i>before / after</i>, можно оставить Past Simple:</p>
    ${ex('After she (had) finished work, she went home.', 'Закончив работу, она пошла домой (обе формы верны).')}
    <h3>When: смысл меняется</h3>
    ${ex('When I arrived, they left.', 'Когда я пришёл, они ушли (сразу после моего прихода).')}
    ${ex('When I arrived, they had left.', 'Когда я пришёл, они уже ушли (до моего прихода).')}`,
  compare: `
    ${tbl(['', 'Past Simple', 'Past Continuous', 'Past Perfect'], [
      ['Пример', 'I left.', 'I was leaving.', 'I had left.'],
      ['Роль', 'событие', 'фон, процесс', 'ещё раньше'],
      ['Вопрос', 'Что случилось?', 'Что происходило?', 'Что было до этого?'],
      ['Рус.', 'ушёл', 'уходил', 'уже ушёл (к тому моменту)']])}
    <h3>Present Perfect или Past Perfect</h3>
    ${ex('I’ve lost my keys. (I can’t get in now.)', 'Я потерял ключи (результат сейчас).')}
    ${ex('I couldn’t get in. I’d lost my keys.', 'Я не мог войти. Я потерял ключи (раньше той ситуации в прошлом).')}
    ${note('<strong>Частая ошибка русскоговорящих:</strong> ставить Past Simple везде, где по-русски «уже сделал». Спросите себя: есть ли в рассказе <em>другая</em> точка в прошлом, относительно которой это «уже»? Если да — Past Perfect.')}`,
  dialog: [
    ['A', 'How was your trip to Scotland?', 'Как прошла поездка в Шотландию?'],
    ['M', 'A disaster at first! By the time we got to the airport, the check-in desk had closed.', 'Сначала катастрофа! Когда мы доехали до аэропорта, стойка регистрации уже закрылась.'],
    ['A', 'Oh no! Why were you so late?', 'О нет! Почему вы так опоздали?'],
    ['M', 'We were driving along the motorway when the car broke down. We hadn’t checked it before the trip.', 'Мы ехали по трассе, и тут сломалась машина. Мы не проверили её перед поездкой.'],
    ['A', 'So what did you do?', 'И что вы сделали?'],
    ['M', 'We got the next flight. But when we arrived in Edinburgh, we realised we’d left our hotel booking at home.', 'Полетели следующим рейсом. Но когда прилетели в Эдинбург, поняли, что оставили бронь отеля дома.'],
    ['A', 'What a nightmare! Had you ever been there before?', 'Кошмар! Вы когда-нибудь бывали там раньше?'],
    ['M', 'No, never. But in the end it was amazing. I’d never seen such beautiful mountains!', 'Нет, ни разу. Но в итоге было потрясающе. Я никогда не видел таких красивых гор!'],
  ],
  test: [
    { q: 'When I got to the cinema, the film ___.', o: ['already started', 'had already started', 'has already started', 'was already start'], a: 1, c: 1, e: 'Фильм начался раньше моего прихода → Past Perfect.' },
    { q: 'She ___ seen snow before she moved to Canada.', o: ['hadn’t', 'didn’t', 'wasn’t', 'hasn’t'], a: 0, c: 0, e: 'Отрицание Past Perfect: hadn’t + V3.' },
    { q: 'By the time we arrived, everyone ___ home.', o: ['went', 'was going', 'goes', 'had gone'], a: 3, c: 2, e: 'by the time → Past Perfect для более раннего действия.' },
    { q: 'V3 of «steal»:', o: ['stealed', 'stole', 'stolen', 'stealen'], a: 2, c: 3, e: 'steal – stole – stolen.' },
    { q: 'I ___ along the street when I saw an old friend.', o: ['was walking', 'had walked', 'walked', 'have walked'], a: 0, c: 1, e: 'Фон (процесс) → Past Continuous.' },
    { q: 'He was tired because he ___ all night.', o: ['works', 'had worked', 'has worked', 'was work'], a: 1, c: 2, e: 'Причина раньше состояния в прошлом → Past Perfect.' },
    { q: '«I’d gone» means:', o: ['I would go', 'I did go', 'I had gone', 'I have gone'], a: 2, c: 0, e: 'После I’d идёт V3 → I had.' },
    { q: 'When I arrived, they ___. (ушли до моего прихода)', o: ['left', 'were leaving', 'leave', 'had left'], a: 3, c: 1, e: 'Действие до другого прошедшего → had left.' },
    { q: 'V3 of «freeze»:', o: ['froze', 'freezed', 'frozen', 'frozed'], a: 2, c: 3, e: 'freeze – froze – frozen.' },
    { q: 'I ___ never ___ such a beautiful place before that holiday.', o: ['had … seen', 'have … seen', 'did … see', 'was … seeing'], a: 0, c: 2, e: 'never … before + точка в прошлом → Past Perfect.' },
  ],
  feynman: {
    task: 'Объясните роли трёх прошедших времён в истории («кадры, декорации, флешбэк») так, чтобы понял 10-летний ребёнок.',
    prompts: ['Чем <i>When I arrived, they left</i> отличается от <i>When I arrived, they had left</i>?', 'Когда Past Perfect можно не ставить?', 'Как понять, что <i>I’d</i> — это had, а не would?', 'Расскажите историю из 6 предложений, используя все три времени.'],
  },
});
