package com.resource.server.service.impl;

import com.resource.server.service.BatchUploadService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class BatchUploadServiceImpl implements BatchUploadService {

    private final Logger log = LoggerFactory.getLogger(BatchUploadServiceImpl.class);

}