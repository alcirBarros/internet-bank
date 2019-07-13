package br.com.web.bank.controller.impl;

import br.com.web.bank.controller.IBankController;
import br.com.web.bank.entity.Bank;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import br.com.web.bank.service.IBankService;

@RestController
@RequestMapping("/v1/bank")
public class BankController implements IBankController {

    @Autowired
    private IBankService iBankService;

    @Override
    @RequestMapping(value = "/list", method = RequestMethod.GET, produces = "application/json")
    public Iterable<Bank> list() {
        Iterable<Bank> bankList = iBankService.listAllBank();
        return bankList;
    }

    @Override
    @RequestMapping(value = "/show/{id}", method = RequestMethod.GET, produces = "application/json")
    public Bank getById(Integer id) {
        return iBankService.getBankById(id);
    }

    @Override
    @RequestMapping(value = "/add", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity<Bank> add(Bank banck_) {
        Bank bank = iBankService.saveBank(banck_);
        return new ResponseEntity("bank create successfully", HttpStatus.OK);
    }

    @Override
    @RequestMapping(value = "/update/{id}", method = RequestMethod.PUT, produces = "application/json")
    public ResponseEntity<Bank> update(Integer id, Bank banck_) {
        this.iBankService.saveBank(banck_);
        return new ResponseEntity("Bank updated successfully", HttpStatus.OK);
    }

    @Override
    @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE, produces = "application/json")
    public ResponseEntity<Bank> delete(Integer id) {
        iBankService.deleteBank(id);
        return new ResponseEntity("Bank deleted successfully", HttpStatus.OK);
    }

}
