describe('Тестирование pokemonbattle.ru', function () {
         
    it('Авторизация', function () {
        cy.visit('https://pokemonbattle.ru/');
        cy.wait(5000);
        cy.get('#k_email').type('USER_LOGIN'); // Ввели логин
        cy.get('#k_password').type('USER_PASSWORD'); // Ввели пароль
        cy.get('.MuiButton-root').click(); //Нажал кнопку войти
        cy.wait(2000);
        cy.get('.header_card_trainer').click(); //Нажал на кнопку тренера
        cy.wait(2000);
        cy.get('[data-qa="shop"] > .k_trainer_in_button_wrapper > .k_trainer_in_button_title_no_desc').click(); //Нажал на кнопку смена аватара
        cy.get('.available > button').first().click();   // кликаем Купить у первого доступного аватара
        cy.get('.card_number').type('4620869113632996');                     // вводим номер карты
        cy.get('.card_csv').type('125');                             // вводим CVV карты
        cy.get('.card_date').type('1226');                           // вводим срок действия карты
        cy.get('.card_name').type('NAME');                           // вводим имя владельца действия карты
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();     // нажимаем кнопку Оплатить
        cy.get('.threeds_number').type('56456');                            // вводим код подтверждения СМС
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();   // нажимаем кнопку Оплатить
        cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения об успешной покупке
    })    

})