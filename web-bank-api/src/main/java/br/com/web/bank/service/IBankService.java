package br.com.web.bank.service;

import br.com.web.bank.entity.Bank;

public interface IBankService {

    Iterable<Bank> listAllBank();

    Bank getBankById(Integer id);

    Bank saveBank(Bank bank);

    void deleteBank(Integer id);

}
