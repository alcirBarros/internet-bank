package br.com.web.bank.repository;

import br.com.web.bank.entity.Bank;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface BankRepository extends CrudRepository<Bank, Integer> {
    
}
