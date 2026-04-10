package com.webapp;

import org.springframework.web.bind.annotation.*;

/**
 * Controller REST principale.
 * Tutti gli endpoint sono raggiungibili su:
 *   http://localhost:8080/api/...
 *
 * @CrossOrigin abilita le chiamate dal frontend in sviluppo locale.
 * Rimuovilo o restringilo in produzione.
 */
@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class ApiController {

    // I tuoi endpoint qui

}
