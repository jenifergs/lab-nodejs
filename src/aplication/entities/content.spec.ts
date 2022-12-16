import { Content } from './content';

test('It should be able to create a notification content', () => {
  const content = new Content('Você recebeu uma nova notificacao');
  expect(content).toBeTruthy();
});

test('it should not be able to create notification content eith less than 5 characters', () => {
  expect(() => new Content('aaa')).toThrow();
});

test('it should not be able to create notification content eith less than 241 characters', () => {
  expect(() => new Content('a'.repeat(241))).toThrow();
});
