package br.com.web.initialize;

import br.com.web.bank.entity.Bank;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import br.com.web.bank.repository.BankRepository;

@Component
public class DemoData implements CommandLineRunner {

    @Autowired
    private BankRepository banckRepository;

    @Override
    @Transactional
    public void run(String... args) throws Exception {

        {
            {
                Bank bank = new Bank();
                bank.setNome("Santander");
                banckRepository.save(bank);
            }
            {
                Bank bank = new Bank();
                bank.setNome("Bradesco");
                banckRepository.save(bank);
            }
            {
                Bank bank = new Bank();
                bank.setNome("Caixa");
                banckRepository.save(bank);
            }

        }
    }

}
