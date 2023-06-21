package com.mycompany.myapp.service.mapper;

import com.mycompany.myapp.domain.Email;
import com.mycompany.myapp.service.dto.EmailDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Email} and its DTO {@link EmailDTO}.
 */
@Mapper(componentModel = "spring")
public interface EmailMapper extends EntityMapper<EmailDTO, Email> {}
