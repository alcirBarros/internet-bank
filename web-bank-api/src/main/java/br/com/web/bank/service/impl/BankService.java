package br.com.web.bank.service.impl;

import br.com.web.bank.entity.Bank;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import br.com.web.bank.service.IBankService;
import br.com.web.bank.repository.BankRepository;

@Service
public class BankService implements IBankService {

    @Autowired
    private BankRepository bankRepository;

    @Override
    public Iterable<Bank> listAllBank() {
        return bankRepository.findAll();
    }

    @Override
    public Bank getBankById(Integer id) {
        Optional<Bank> optionalBank = bankRepository.findById(id);
        return (optionalBank.isPresent() ? optionalBank.get() : null);
    }

    @Override
    public Bank saveBank(Bank bank) {
        return bankRepository.save(bank);
    }

    @Override
    public void deleteBank(Integer id) {
        bankRepository.deleteById(id);
    }
}
