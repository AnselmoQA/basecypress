describe('Teste de Login', () => {
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); // Altere para a URL correta
  });

  it('Deve realizar login com sucesso', () => {
    cy.get('input[name="username"]').type('Admin'); // Seletor do campo de usuário
    cy.get('input[name="password"]').type('admin123'); // Seletor do campo de senha
    cy.get('button[type="submit"]').click();

    // Verificação após login
    cy.contains('Time at Work').should('be.visible');
  });
});
  