package com.example.studentsystem.exception;

public class NoMemberException extends RuntimeException {
    NoMemberException() {
        super();
    }

    public NoMemberException(String msg) {
        super(msg);
    }
}
