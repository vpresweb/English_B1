/* ===== WEEK 10 — Phrasal verbs, make / do ===== */
COURSE.weeks.push({
  n: 10,
  title: 'Фразовые глаголы и make / do',
  tag: 'give up, look after, turn it down · run out of · make a mistake, do homework',
  goal: 'Понимать и использовать 40 частых фразовых глаголов B1, правильно ставить дополнение (turn it off, а не turn off it), использовать трёхчастные глаголы (look forward to, get on with) и устойчивые сочетания с make и do.',
  days: [
    ['Теория — глагол + маленькое слово', ['Прочитать раздел «Теория»: почему смысл меняется целиком', 'Аналогия Фейнмана: лего-детали up, down, off, on', 'Выписать 10 фразовых глаголов из любимого сериала']],
    ['Up, down, off, on', ['<i>get up, give up, turn down, put off, turn on, carry on</i>', 'Значения частиц: up — до конца / вверх, off — прочь / отменить', 'Составить по предложению с каждым глаголом о себе']],
    ['Разделяемые и неразделяемые', ['<i>turn the TV off / turn off the TV / turn it off</i>', 'Неразделяемые: <i>look after the kids → look after them</i>', 'Упражнение: заменить существительное на it / them']],
    ['Трёхчастные', ['<i>look forward to, get on with, run out of, come up with, put up with</i>', 'Дальше — существительное или -ing', 'Рассказать о коллегах: с кем вы ладите, кого терпите']],
    ['Make или do', ['make — создать: <i>make a cake, a decision, a mistake, a noise</i>', 'do — выполнить: <i>do homework, the shopping, exercise, a favour</i>', 'Разыграть диалог недели — обе роли']],
    ['Тест + закрепление', ['Пройти тест недели (раздел 🎯) — цель 80%+', 'Написать e-mail (~100 слов) с 8 фразовыми глаголами', 'Карточки: 40 глаголов, повторить по системе Лейтнера']],
    ['Фейнман-урок недели', ['Запись 2–3 мин: «лего-детали» и место дополнения', 'Шпаргалка make / do на одну страницу', 'Список пробелов → план недели 11 (письмо B1)']],
  ],
  progress: ['Значения глаголов', 'Место дополнения', 'Трёхчастные', 'Make / do'],
  theory: `
    <h3>Идея в одной фразе</h3>
    <p>Фразовый глагол — это <strong>глагол + частица</strong> (up, off, on…), и вместе они дают <strong>новое значение</strong>, которое часто нельзя угадать по частям.</p>
    ${ex('I gave up smoking last year.', 'Я бросил курить в прошлом году (give + up ≠ «дать вверх»).')}
    ${ex('Can you look after my cat?', 'Можешь присмотреть за моей кошкой?')}
    <h3>Аналогия Фейнмана</h3>
    <p>Частицы — это <strong>детали лего</strong>, у каждой есть «характер». <i>up</i> — вверх или до конца (<i>eat up, fill up</i>). <i>off</i> — прочь, отключить (<i>turn off, take off</i>). <i>on</i> — продолжать, включить (<i>carry on, turn on</i>). <i>down</i> — вниз, уменьшить (<i>turn down, slow down</i>). Характер помогает догадаться, но запоминать всё равно лучше с примером.</p>
    ${note('<strong>Правило места:</strong> если дополнение — местоимение (it, them, me), оно стоит <em>между</em> глаголом и частицей: <i>turn it off</i>, не <i>turn off it</i>.')}`,
  forms: `
    <h3>40 частых фразовых глаголов B1</h3>
    ${tbl(['Глагол', 'Значение', 'Глагол', 'Значение'], [
      ['get up', 'вставать', 'give up', 'бросить, сдаться'],
      ['look after', 'присматривать', 'look for', 'искать'],
      ['look up', 'посмотреть (в словаре)', 'find out', 'узнать'],
      ['turn on / off', 'включить / выключить', 'turn up / down', 'громче / тише; отказать'],
      ['put on', 'надеть', 'take off', 'снять; взлететь'],
      ['put off', 'отложить', 'call off', 'отменить'],
      ['carry on', 'продолжать', 'set off', 'отправиться в путь'],
      ['pick up', 'подобрать, заехать за', 'drop off', 'высадить, завезти'],
      ['break down', 'сломаться', 'break up', 'расстаться'],
      ['grow up', 'вырасти', 'bring up', 'воспитывать; поднять тему'],
      ['fill in', 'заполнить (форму)', 'check in / out', 'зарегистрироваться / выехать'],
      ['work out', 'тренироваться; понять', 'sort out', 'уладить'],
      ['take up', 'начать заниматься', 'give back', 'вернуть'],
      ['turn into', 'превратиться', 'end up', 'в итоге оказаться'],
      ['look forward to', 'с нетерпением ждать', 'get on with', 'ладить с'],
      ['run out of', 'закончиться (запас)', 'come up with', 'придумать'],
      ['put up with', 'терпеть', 'catch up with', 'догнать'],
      ['get over', 'оправиться от', 'go on', 'продолжаться'],
      ['hang out', 'тусоваться', 'show off', 'хвастаться'],
      ['look out', 'берегись', 'take after', 'быть похожим на (родителя)']])}`,
  usage: `
    <h3>Место дополнения</h3>
    ${tbl(['Тип', 'С существительным', 'С местоимением'], [
      ['Разделяемый', 'Turn off the light. / Turn the light off.', 'Turn <em>it</em> off.'],
      ['Неразделяемый', 'Look after the baby.', 'Look after <em>her</em>.'],
      ['Трёхчастный', 'I’ve run out of milk.', 'I’ve run out of <em>it</em>.']])}
    <h3>Make или do</h3>
    ${tbl(['make (создать, произвести)', 'do (выполнить, заниматься)'], [
      ['make a cake / a meal', 'do the shopping / the cooking'],
      ['make a decision / a plan', 'do your homework / a course'],
      ['make a mistake / a noise', 'do exercise / sport'],
      ['make money / friends', 'do business / your best'],
      ['make a phone call / an appointment', 'do someone a favour / the washing-up']])}
    ${note('<strong>Подсказка:</strong> do — часто с работой и делами вообще (<i>do the housework, do something, do nothing</i>); make — когда появляется что-то новое (<i>make a cake, make a mess</i>).')}`,
  compare: `
    ${tbl(['Фразовый глагол', 'Нейтральный синоним', 'Где чаще'], [
      ['find out', 'discover', 'разговор / письмо'],
      ['put off', 'postpone', 'разговор / официально'],
      ['come up with', 'invent, think of', 'разговор / письмо'],
      ['look into', 'investigate', 'разговор / официально'],
      ['give up', 'stop, quit', 'везде']])}
    <h3>Одна частица — разные значения</h3>
    ${ex('Turn up the music! / He turned up late.', 'Сделай музыку громче! / Он явился поздно.')}
    ${ex('Take off your shoes. / The plane took off.', 'Сними обувь. / Самолёт взлетел.')}
    ${note('<strong>Частые ошибки русскоговорящих:</strong> <i>turn off it</i> → <i>turn it off</i>. <i>do a mistake</i> → <i>make a mistake</i>. <i>make homework</i> → <i>do homework</i>. <i>I look forward to see you</i> → <i>to seeing you</i>.')}`,
  dialog: [
    ['T', 'Hi! Sorry I’m late. My car broke down on the motorway.', 'Привет! Прости, что опоздал. Машина сломалась на трассе.'],
    ['R', 'Oh no! Did you sort it out?', 'О нет! Ты всё уладил?'],
    ['T', 'Yes, a mechanic picked me up and dropped me off here. I’ll pick the car up tomorrow.', 'Да, механик меня подобрал и подвёз сюда. Машину заберу завтра.'],
    ['R', 'Well, the meeting has been put off until three anyway.', 'Ну, встречу всё равно перенесли на три.'],
    ['T', 'Great, then I can catch up with my emails. Have we run out of coffee again?', 'Отлично, тогда успею разобрать почту. У нас опять кончился кофе?'],
    ['R', 'Yes, sorry. I’ll do the shopping after work. Can you do me a favour and fill in this form?', 'Да, извини. Я схожу за покупками после работы. Можешь сделать одолжение и заполнить эту форму?'],
    ['T', 'Sure. By the way, have you found out who’s replacing Mark?', 'Конечно. Кстати, ты выяснила, кто заменит Марка?'],
    ['R', 'Not yet, but I get on really well with everyone in his team, so I’m not worried.', 'Пока нет, но я прекрасно лажу со всеми в его команде, так что не волнуюсь.'],
  ],
  test: [
    { q: 'I gave ___ smoking two years ago.', o: ['off', 'out', 'up', 'down'], a: 2, c: 0, e: 'give up — бросить.' },
    { q: 'Can you ___ my dog while I’m away?', o: ['look after', 'look for', 'look up', 'look out'], a: 0, c: 0, e: 'look after — присматривать.' },
    { q: 'The TV is too loud. Can you turn ___?', o: ['down it', 'off it', 'it up', 'it down'], a: 3, c: 1, e: 'Местоимение между глаголом и частицей: turn it down.' },
    { q: 'Which is correct?', o: ['Put on it.', 'Put it on.', 'Put it.', 'On put it.'], a: 1, c: 1, e: 'Разделяемый глагол + местоимение: put it on.' },
    { q: 'We’ve run ___ milk. Can you buy some?', o: ['out', 'off of', 'out of', 'away'], a: 2, c: 2, e: 'run out of — закончиться.' },
    { q: 'I don’t get ___ my new boss.', o: ['on with', 'up with', 'over with', 'on to'], a: 0, c: 2, e: 'get on with — ладить.' },
    { q: 'She came ___ a brilliant idea.', o: ['out with', 'up to', 'over', 'up with'], a: 3, c: 2, e: 'come up with — придумать.' },
    { q: 'I always ___ mistakes with prepositions.', o: ['do', 'make', 'take', 'have'], a: 1, c: 3, e: 'make a mistake.' },
    { q: 'Have you ___ your homework yet?', o: ['made', 'taken', 'done', 'got'], a: 2, c: 3, e: 'do homework.' },
    { q: 'Could you ___ me a favour?', o: ['make', 'give', 'have', 'do'], a: 3, c: 3, e: 'do someone a favour.' },
  ],
  feynman: {
    task: 'Объясните, как работают фразовые глаголы («лего-детали» up, off, on, down) и куда ставить it, так, чтобы понял 10-летний ребёнок.',
    prompts: ['Почему <i>turn off it</i> — ошибка, а <i>look after it</i> — нет?', 'Назовите 5 значений частицы up на примерах.', 'Как отличить make от do? Приведите по 5 сочетаний.', 'Расскажите о своём утре, используя 8 фразовых глаголов.'],
  },
});
