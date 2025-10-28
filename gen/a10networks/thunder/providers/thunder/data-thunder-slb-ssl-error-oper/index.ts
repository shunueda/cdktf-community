// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbSslErrorOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#id DataThunderSlbSslErrorOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#oper DataThunderSlbSslErrorOper#oper}
  */
  readonly oper?: DataThunderSlbSslErrorOperOper;
}
export interface DataThunderSlbSslErrorOperOper {
  /**
  * app data in handshake
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#app_data_in_handshake DataThunderSlbSslErrorOper#app_data_in_handshake}
  */
  readonly appDataInHandshake?: number;
  /**
  * attempt to reuse sess in diff context
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#attempt_to_reuse_sess_in_diff_context DataThunderSlbSslErrorOper#attempt_to_reuse_sess_in_diff_context}
  */
  readonly attemptToReuseSessInDiffContext?: number;
  /**
  * bad alert record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#bad_alert_record DataThunderSlbSslErrorOper#bad_alert_record}
  */
  readonly badAlertRecord?: number;
  /**
  * bad authentication type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#bad_authentication_type DataThunderSlbSslErrorOper#bad_authentication_type}
  */
  readonly badAuthenticationType?: number;
  /**
  * bad change cipher spec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#bad_change_cipher_spec DataThunderSlbSslErrorOper#bad_change_cipher_spec}
  */
  readonly badChangeCipherSpec?: number;
  /**
  * bad checksum
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#bad_checksum DataThunderSlbSslErrorOper#bad_checksum}
  */
  readonly badChecksum?: number;
  /**
  * bad data returned by callback
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#bad_data_returned_by_callback DataThunderSlbSslErrorOper#bad_data_returned_by_callback}
  */
  readonly badDataReturnedByCallback?: number;
  /**
  * bad decompression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#bad_decompression DataThunderSlbSslErrorOper#bad_decompression}
  */
  readonly badDecompression?: number;
  /**
  * bad dh g length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#bad_dh_g_length DataThunderSlbSslErrorOper#bad_dh_g_length}
  */
  readonly badDhGLength?: number;
  /**
  * bad dh p length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#bad_dh_p_length DataThunderSlbSslErrorOper#bad_dh_p_length}
  */
  readonly badDhPLength?: number;
  /**
  * bad dh pub key length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#bad_dh_pub_key_length DataThunderSlbSslErrorOper#bad_dh_pub_key_length}
  */
  readonly badDhPubKeyLength?: number;
  /**
  * bad digest length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#bad_digest_length DataThunderSlbSslErrorOper#bad_digest_length}
  */
  readonly badDigestLength?: number;
  /**
  * bad dsa signature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#bad_dsa_signature DataThunderSlbSslErrorOper#bad_dsa_signature}
  */
  readonly badDsaSignature?: number;
  /**
  * bad ecc cert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#bad_ecc_cert DataThunderSlbSslErrorOper#bad_ecc_cert}
  */
  readonly badEccCert?: number;
  /**
  * bad ecdsa sig
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#bad_ecdsa_sig DataThunderSlbSslErrorOper#bad_ecdsa_sig}
  */
  readonly badEcdsaSig?: number;
  /**
  * bad ecpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#bad_ecpoint DataThunderSlbSslErrorOper#bad_ecpoint}
  */
  readonly badEcpoint?: number;
  /**
  * bad handshake length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#bad_handshake_length DataThunderSlbSslErrorOper#bad_handshake_length}
  */
  readonly badHandshakeLength?: number;
  /**
  * bad hello request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#bad_hello_request DataThunderSlbSslErrorOper#bad_hello_request}
  */
  readonly badHelloRequest?: number;
  /**
  * bad length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#bad_length DataThunderSlbSslErrorOper#bad_length}
  */
  readonly badLength?: number;
  /**
  * bad mac decode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#bad_mac_decode DataThunderSlbSslErrorOper#bad_mac_decode}
  */
  readonly badMacDecode?: number;
  /**
  * bad message type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#bad_message_type DataThunderSlbSslErrorOper#bad_message_type}
  */
  readonly badMessageType?: number;
  /**
  * bad packet length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#bad_packet_length DataThunderSlbSslErrorOper#bad_packet_length}
  */
  readonly badPacketLength?: number;
  /**
  * bad protocol version number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#bad_protocol_version_number DataThunderSlbSslErrorOper#bad_protocol_version_number}
  */
  readonly badProtocolVersionNumber?: number;
  /**
  * bad response argument
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#bad_response_argument DataThunderSlbSslErrorOper#bad_response_argument}
  */
  readonly badResponseArgument?: number;
  /**
  * bad rsa decrypt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#bad_rsa_decrypt DataThunderSlbSslErrorOper#bad_rsa_decrypt}
  */
  readonly badRsaDecrypt?: number;
  /**
  * bad rsa e length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#bad_rsa_e_length DataThunderSlbSslErrorOper#bad_rsa_e_length}
  */
  readonly badRsaELength?: number;
  /**
  * bad rsa encrypt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#bad_rsa_encrypt DataThunderSlbSslErrorOper#bad_rsa_encrypt}
  */
  readonly badRsaEncrypt?: number;
  /**
  * bad rsa modulus length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#bad_rsa_modulus_length DataThunderSlbSslErrorOper#bad_rsa_modulus_length}
  */
  readonly badRsaModulusLength?: number;
  /**
  * bad rsa signature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#bad_rsa_signature DataThunderSlbSslErrorOper#bad_rsa_signature}
  */
  readonly badRsaSignature?: number;
  /**
  * bad signature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#bad_signature DataThunderSlbSslErrorOper#bad_signature}
  */
  readonly badSignature?: number;
  /**
  * bad ssl filetype
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#bad_ssl_filetype DataThunderSlbSslErrorOper#bad_ssl_filetype}
  */
  readonly badSslFiletype?: number;
  /**
  * bad ssl session id length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#bad_ssl_session_id_length DataThunderSlbSslErrorOper#bad_ssl_session_id_length}
  */
  readonly badSslSessionIdLength?: number;
  /**
  * bad state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#bad_state DataThunderSlbSslErrorOper#bad_state}
  */
  readonly badState?: number;
  /**
  * bad write retry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#bad_write_retry DataThunderSlbSslErrorOper#bad_write_retry}
  */
  readonly badWriteRetry?: number;
  /**
  * bio not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#bio_not_set DataThunderSlbSslErrorOper#bio_not_set}
  */
  readonly bioNotSet?: number;
  /**
  * block cipher pad is wrong
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#block_cipher_pad_is_wrong DataThunderSlbSslErrorOper#block_cipher_pad_is_wrong}
  */
  readonly blockCipherPadIsWrong?: number;
  /**
  * bn lib
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#bn_lib DataThunderSlbSslErrorOper#bn_lib}
  */
  readonly bnLib?: number;
  /**
  * ca dn length mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#ca_dn_length_mismatch DataThunderSlbSslErrorOper#ca_dn_length_mismatch}
  */
  readonly caDnLengthMismatch?: number;
  /**
  * ca dn too long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#ca_dn_too_long DataThunderSlbSslErrorOper#ca_dn_too_long}
  */
  readonly caDnTooLong?: number;
  /**
  * ccs received early
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#ccs_received_early DataThunderSlbSslErrorOper#ccs_received_early}
  */
  readonly ccsReceivedEarly?: number;
  /**
  * cert length mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#cert_length_mismatch DataThunderSlbSslErrorOper#cert_length_mismatch}
  */
  readonly certLengthMismatch?: number;
  /**
  * certificate verify failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#certificate_verify_failed DataThunderSlbSslErrorOper#certificate_verify_failed}
  */
  readonly certificateVerifyFailed?: number;
  /**
  * challenge is different
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#challenge_is_different DataThunderSlbSslErrorOper#challenge_is_different}
  */
  readonly challengeIsDifferent?: number;
  /**
  * cipher code wrong length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#cipher_code_wrong_length DataThunderSlbSslErrorOper#cipher_code_wrong_length}
  */
  readonly cipherCodeWrongLength?: number;
  /**
  * cipher or hash unavailable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#cipher_or_hash_unavailable DataThunderSlbSslErrorOper#cipher_or_hash_unavailable}
  */
  readonly cipherOrHashUnavailable?: number;
  /**
  * cipher table src error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#cipher_table_src_error DataThunderSlbSslErrorOper#cipher_table_src_error}
  */
  readonly cipherTableSrcError?: number;
  /**
  * clienthello tlsext
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#clienthello_tlsext DataThunderSlbSslErrorOper#clienthello_tlsext}
  */
  readonly clienthelloTlsext?: number;
  /**
  * compressed length too long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#compressed_length_too_long DataThunderSlbSslErrorOper#compressed_length_too_long}
  */
  readonly compressedLengthTooLong?: number;
  /**
  * compression failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#compression_failure DataThunderSlbSslErrorOper#compression_failure}
  */
  readonly compressionFailure?: number;
  /**
  * compression library error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#compression_library_error DataThunderSlbSslErrorOper#compression_library_error}
  */
  readonly compressionLibraryError?: number;
  /**
  * connection id is different
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#connection_id_is_different DataThunderSlbSslErrorOper#connection_id_is_different}
  */
  readonly connectionIdIsDifferent?: number;
  /**
  * connection type not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#connection_type_not_set DataThunderSlbSslErrorOper#connection_type_not_set}
  */
  readonly connectionTypeNotSet?: number;
  /**
  * cookie mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#cookie_mismatch DataThunderSlbSslErrorOper#cookie_mismatch}
  */
  readonly cookieMismatch?: number;
  /**
  * data between ccs and finished
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#data_between_ccs_and_finished DataThunderSlbSslErrorOper#data_between_ccs_and_finished}
  */
  readonly dataBetweenCcsAndFinished?: number;
  /**
  * data length too long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#data_length_too_long DataThunderSlbSslErrorOper#data_length_too_long}
  */
  readonly dataLengthTooLong?: number;
  /**
  * decryption failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#decryption_failed DataThunderSlbSslErrorOper#decryption_failed}
  */
  readonly decryptionFailed?: number;
  /**
  * decryption failed or bad record mac
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#decryption_failed_or_bad_record_mac DataThunderSlbSslErrorOper#decryption_failed_or_bad_record_mac}
  */
  readonly decryptionFailedOrBadRecordMac?: number;
  /**
  * dh public value length is wrong
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#dh_public_value_length_is_wrong DataThunderSlbSslErrorOper#dh_public_value_length_is_wrong}
  */
  readonly dhPublicValueLengthIsWrong?: number;
  /**
  * digest check failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#digest_check_failed DataThunderSlbSslErrorOper#digest_check_failed}
  */
  readonly digestCheckFailed?: number;
  /**
  * encrypted length too long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#encrypted_length_too_long DataThunderSlbSslErrorOper#encrypted_length_too_long}
  */
  readonly encryptedLengthTooLong?: number;
  /**
  * error generating tmp rsa key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#error_generating_tmp_rsa_key DataThunderSlbSslErrorOper#error_generating_tmp_rsa_key}
  */
  readonly errorGeneratingTmpRsaKey?: number;
  /**
  * error in received cipher list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#error_in_received_cipher_list DataThunderSlbSslErrorOper#error_in_received_cipher_list}
  */
  readonly errorInReceivedCipherList?: number;
  /**
  * excessive message size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#excessive_message_size DataThunderSlbSslErrorOper#excessive_message_size}
  */
  readonly excessiveMessageSize?: number;
  /**
  * extra data in message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#extra_data_in_message DataThunderSlbSslErrorOper#extra_data_in_message}
  */
  readonly extraDataInMessage?: number;
  /**
  * got a fin before a ccs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#got_a_fin_before_a_ccs DataThunderSlbSslErrorOper#got_a_fin_before_a_ccs}
  */
  readonly gotAFinBeforeACcs?: number;
  /**
  * http request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#http_request DataThunderSlbSslErrorOper#http_request}
  */
  readonly httpRequest?: number;
  /**
  * https proxy request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#https_proxy_request DataThunderSlbSslErrorOper#https_proxy_request}
  */
  readonly httpsProxyRequest?: number;
  /**
  * illegal padding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#illegal_padding DataThunderSlbSslErrorOper#illegal_padding}
  */
  readonly illegalPadding?: number;
  /**
  * inappropriate fallback
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#inappropriate_fallback DataThunderSlbSslErrorOper#inappropriate_fallback}
  */
  readonly inappropriateFallback?: number;
  /**
  * invalid challenge length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#invalid_challenge_length DataThunderSlbSslErrorOper#invalid_challenge_length}
  */
  readonly invalidChallengeLength?: number;
  /**
  * invalid command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#invalid_command DataThunderSlbSslErrorOper#invalid_command}
  */
  readonly invalidCommand?: number;
  /**
  * invalid purpose
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#invalid_purpose DataThunderSlbSslErrorOper#invalid_purpose}
  */
  readonly invalidPurpose?: number;
  /**
  * invalid status response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#invalid_status_response DataThunderSlbSslErrorOper#invalid_status_response}
  */
  readonly invalidStatusResponse?: number;
  /**
  * invalid trust
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#invalid_trust DataThunderSlbSslErrorOper#invalid_trust}
  */
  readonly invalidTrust?: number;
  /**
  * key arg too long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#key_arg_too_long DataThunderSlbSslErrorOper#key_arg_too_long}
  */
  readonly keyArgTooLong?: number;
  /**
  * krb5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#krb5 DataThunderSlbSslErrorOper#krb5}
  */
  readonly krb5?: number;
  /**
  * krb5 client cc principal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#krb5_client_cc_principal DataThunderSlbSslErrorOper#krb5_client_cc_principal}
  */
  readonly krb5ClientCcPrincipal?: number;
  /**
  * krb5 client get cred
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#krb5_client_get_cred DataThunderSlbSslErrorOper#krb5_client_get_cred}
  */
  readonly krb5ClientGetCred?: number;
  /**
  * krb5 client init
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#krb5_client_init DataThunderSlbSslErrorOper#krb5_client_init}
  */
  readonly krb5ClientInit?: number;
  /**
  * krb5 client mk_req
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#krb5_client_mk_req DataThunderSlbSslErrorOper#krb5_client_mk_req}
  */
  readonly krb5ClientMkReq?: number;
  /**
  * krb5 server bad ticket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#krb5_server_bad_ticket DataThunderSlbSslErrorOper#krb5_server_bad_ticket}
  */
  readonly krb5ServerBadTicket?: number;
  /**
  * krb5 server init
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#krb5_server_init DataThunderSlbSslErrorOper#krb5_server_init}
  */
  readonly krb5ServerInit?: number;
  /**
  * krb5 server rd_req
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#krb5_server_rd_req DataThunderSlbSslErrorOper#krb5_server_rd_req}
  */
  readonly krb5ServerRdReq?: number;
  /**
  * krb5 server tkt expired
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#krb5_server_tkt_expired DataThunderSlbSslErrorOper#krb5_server_tkt_expired}
  */
  readonly krb5ServerTktExpired?: number;
  /**
  * krb5 server tkt not yet valid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#krb5_server_tkt_not_yet_valid DataThunderSlbSslErrorOper#krb5_server_tkt_not_yet_valid}
  */
  readonly krb5ServerTktNotYetValid?: number;
  /**
  * krb5 server tkt skew
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#krb5_server_tkt_skew DataThunderSlbSslErrorOper#krb5_server_tkt_skew}
  */
  readonly krb5ServerTktSkew?: number;
  /**
  * length mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#length_mismatch DataThunderSlbSslErrorOper#length_mismatch}
  */
  readonly lengthMismatch?: number;
  /**
  * length too short
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#length_too_short DataThunderSlbSslErrorOper#length_too_short}
  */
  readonly lengthTooShort?: number;
  /**
  * library bug
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#library_bug DataThunderSlbSslErrorOper#library_bug}
  */
  readonly libraryBug?: number;
  /**
  * library has no ciphers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#library_has_no_ciphers DataThunderSlbSslErrorOper#library_has_no_ciphers}
  */
  readonly libraryHasNoCiphers?: number;
  /**
  * mast key too long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#mast_key_too_long DataThunderSlbSslErrorOper#mast_key_too_long}
  */
  readonly mastKeyTooLong?: number;
  /**
  * message too long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#message_too_long DataThunderSlbSslErrorOper#message_too_long}
  */
  readonly messageTooLong?: number;
  /**
  * missing dh dsa cert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#missing_dh_dsa_cert DataThunderSlbSslErrorOper#missing_dh_dsa_cert}
  */
  readonly missingDhDsaCert?: number;
  /**
  * missing dh key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#missing_dh_key DataThunderSlbSslErrorOper#missing_dh_key}
  */
  readonly missingDhKey?: number;
  /**
  * missing dh rsa cert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#missing_dh_rsa_cert DataThunderSlbSslErrorOper#missing_dh_rsa_cert}
  */
  readonly missingDhRsaCert?: number;
  /**
  * missing dsa signing cert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#missing_dsa_signing_cert DataThunderSlbSslErrorOper#missing_dsa_signing_cert}
  */
  readonly missingDsaSigningCert?: number;
  /**
  * missing export tmp dh key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#missing_export_tmp_dh_key DataThunderSlbSslErrorOper#missing_export_tmp_dh_key}
  */
  readonly missingExportTmpDhKey?: number;
  /**
  * missing export tmp rsa key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#missing_export_tmp_rsa_key DataThunderSlbSslErrorOper#missing_export_tmp_rsa_key}
  */
  readonly missingExportTmpRsaKey?: number;
  /**
  * missing rsa certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#missing_rsa_certificate DataThunderSlbSslErrorOper#missing_rsa_certificate}
  */
  readonly missingRsaCertificate?: number;
  /**
  * missing rsa encrypting cert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#missing_rsa_encrypting_cert DataThunderSlbSslErrorOper#missing_rsa_encrypting_cert}
  */
  readonly missingRsaEncryptingCert?: number;
  /**
  * missing rsa signing cert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#missing_rsa_signing_cert DataThunderSlbSslErrorOper#missing_rsa_signing_cert}
  */
  readonly missingRsaSigningCert?: number;
  /**
  * missing tmp dh key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#missing_tmp_dh_key DataThunderSlbSslErrorOper#missing_tmp_dh_key}
  */
  readonly missingTmpDhKey?: number;
  /**
  * missing tmp rsa key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#missing_tmp_rsa_key DataThunderSlbSslErrorOper#missing_tmp_rsa_key}
  */
  readonly missingTmpRsaKey?: number;
  /**
  * missing tmp rsa pkey
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#missing_tmp_rsa_pkey DataThunderSlbSslErrorOper#missing_tmp_rsa_pkey}
  */
  readonly missingTmpRsaPkey?: number;
  /**
  * missing verify message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#missing_verify_message DataThunderSlbSslErrorOper#missing_verify_message}
  */
  readonly missingVerifyMessage?: number;
  /**
  * multiple sgc restarts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#multiple_sgc_restarts DataThunderSlbSslErrorOper#multiple_sgc_restarts}
  */
  readonly multipleSgcRestarts?: number;
  /**
  * no certificate assigned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#no_certificate_assigned DataThunderSlbSslErrorOper#no_certificate_assigned}
  */
  readonly noCertificateAssigned?: number;
  /**
  * no certificate returned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#no_certificate_returned DataThunderSlbSslErrorOper#no_certificate_returned}
  */
  readonly noCertificateReturned?: number;
  /**
  * no certificate set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#no_certificate_set DataThunderSlbSslErrorOper#no_certificate_set}
  */
  readonly noCertificateSet?: number;
  /**
  * no certificate specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#no_certificate_specified DataThunderSlbSslErrorOper#no_certificate_specified}
  */
  readonly noCertificateSpecified?: number;
  /**
  * no certificates returned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#no_certificates_returned DataThunderSlbSslErrorOper#no_certificates_returned}
  */
  readonly noCertificatesReturned?: number;
  /**
  * no cipher list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#no_cipher_list DataThunderSlbSslErrorOper#no_cipher_list}
  */
  readonly noCipherList?: number;
  /**
  * no cipher match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#no_cipher_match DataThunderSlbSslErrorOper#no_cipher_match}
  */
  readonly noCipherMatch?: number;
  /**
  * no ciphers available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#no_ciphers_available DataThunderSlbSslErrorOper#no_ciphers_available}
  */
  readonly noCiphersAvailable?: number;
  /**
  * no ciphers passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#no_ciphers_passed DataThunderSlbSslErrorOper#no_ciphers_passed}
  */
  readonly noCiphersPassed?: number;
  /**
  * no ciphers specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#no_ciphers_specified DataThunderSlbSslErrorOper#no_ciphers_specified}
  */
  readonly noCiphersSpecified?: number;
  /**
  * no client cert received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#no_client_cert_received DataThunderSlbSslErrorOper#no_client_cert_received}
  */
  readonly noClientCertReceived?: number;
  /**
  * no compression specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#no_compression_specified DataThunderSlbSslErrorOper#no_compression_specified}
  */
  readonly noCompressionSpecified?: number;
  /**
  * no method specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#no_method_specified DataThunderSlbSslErrorOper#no_method_specified}
  */
  readonly noMethodSpecified?: number;
  /**
  * no private key assigned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#no_private_key_assigned DataThunderSlbSslErrorOper#no_private_key_assigned}
  */
  readonly noPrivateKeyAssigned?: number;
  /**
  * no privatekey
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#no_privatekey DataThunderSlbSslErrorOper#no_privatekey}
  */
  readonly noPrivatekey?: number;
  /**
  * no protocols available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#no_protocols_available DataThunderSlbSslErrorOper#no_protocols_available}
  */
  readonly noProtocolsAvailable?: number;
  /**
  * no publickey
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#no_publickey DataThunderSlbSslErrorOper#no_publickey}
  */
  readonly noPublickey?: number;
  /**
  * no required digest
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#no_required_digest DataThunderSlbSslErrorOper#no_required_digest}
  */
  readonly noRequiredDigest?: number;
  /**
  * no shared cipher
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#no_shared_cipher DataThunderSlbSslErrorOper#no_shared_cipher}
  */
  readonly noSharedCipher?: number;
  /**
  * no verify callback
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#no_verify_callback DataThunderSlbSslErrorOper#no_verify_callback}
  */
  readonly noVerifyCallback?: number;
  /**
  * non sslv2 initial packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#non_sslv2_initial_packet DataThunderSlbSslErrorOper#non_sslv2_initial_packet}
  */
  readonly nonSslv2InitialPacket?: number;
  /**
  * null ssl ctx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#null_ssl_ctx DataThunderSlbSslErrorOper#null_ssl_ctx}
  */
  readonly nullSslCtx?: number;
  /**
  * null ssl method passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#null_ssl_method_passed DataThunderSlbSslErrorOper#null_ssl_method_passed}
  */
  readonly nullSslMethodPassed?: number;
  /**
  * old session cipher not returned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#old_session_cipher_not_returned DataThunderSlbSslErrorOper#old_session_cipher_not_returned}
  */
  readonly oldSessionCipherNotReturned?: number;
  /**
  * packet length too long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#packet_length_too_long DataThunderSlbSslErrorOper#packet_length_too_long}
  */
  readonly packetLengthTooLong?: number;
  /**
  * parse tlsext
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#parse_tlsext DataThunderSlbSslErrorOper#parse_tlsext}
  */
  readonly parseTlsext?: number;
  /**
  * path too long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#path_too_long DataThunderSlbSslErrorOper#path_too_long}
  */
  readonly pathTooLong?: number;
  /**
  * peer did not return a certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#peer_did_not_return_a_certificate DataThunderSlbSslErrorOper#peer_did_not_return_a_certificate}
  */
  readonly peerDidNotReturnACertificate?: number;
  /**
  * peer error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#peer_error DataThunderSlbSslErrorOper#peer_error}
  */
  readonly peerError?: number;
  /**
  * peer error certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#peer_error_certificate DataThunderSlbSslErrorOper#peer_error_certificate}
  */
  readonly peerErrorCertificate?: number;
  /**
  * peer error no certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#peer_error_no_certificate DataThunderSlbSslErrorOper#peer_error_no_certificate}
  */
  readonly peerErrorNoCertificate?: number;
  /**
  * peer error no cipher
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#peer_error_no_cipher DataThunderSlbSslErrorOper#peer_error_no_cipher}
  */
  readonly peerErrorNoCipher?: number;
  /**
  * peer error unsupported certificate type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#peer_error_unsupported_certificate_type DataThunderSlbSslErrorOper#peer_error_unsupported_certificate_type}
  */
  readonly peerErrorUnsupportedCertificateType?: number;
  /**
  * pre mac length too long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#pre_mac_length_too_long DataThunderSlbSslErrorOper#pre_mac_length_too_long}
  */
  readonly preMacLengthTooLong?: number;
  /**
  * problems mapping cipher functions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#problems_mapping_cipher_functions DataThunderSlbSslErrorOper#problems_mapping_cipher_functions}
  */
  readonly problemsMappingCipherFunctions?: number;
  /**
  * protocol is shutdown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#protocol_is_shutdown DataThunderSlbSslErrorOper#protocol_is_shutdown}
  */
  readonly protocolIsShutdown?: number;
  /**
  * public key encrypt error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#public_key_encrypt_error DataThunderSlbSslErrorOper#public_key_encrypt_error}
  */
  readonly publicKeyEncryptError?: number;
  /**
  * public key is not rsa
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#public_key_is_not_rsa DataThunderSlbSslErrorOper#public_key_is_not_rsa}
  */
  readonly publicKeyIsNotRsa?: number;
  /**
  * public key not rsa
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#public_key_not_rsa DataThunderSlbSslErrorOper#public_key_not_rsa}
  */
  readonly publicKeyNotRsa?: number;
  /**
  * read bio not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#read_bio_not_set DataThunderSlbSslErrorOper#read_bio_not_set}
  */
  readonly readBioNotSet?: number;
  /**
  * read wrong packet type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#read_wrong_packet_type DataThunderSlbSslErrorOper#read_wrong_packet_type}
  */
  readonly readWrongPacketType?: number;
  /**
  * record length mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#record_length_mismatch DataThunderSlbSslErrorOper#record_length_mismatch}
  */
  readonly recordLengthMismatch?: number;
  /**
  * record too large
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#record_too_large DataThunderSlbSslErrorOper#record_too_large}
  */
  readonly recordTooLarge?: number;
  /**
  * record too small
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#record_too_small DataThunderSlbSslErrorOper#record_too_small}
  */
  readonly recordTooSmall?: number;
  /**
  * required cipher missing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#required_cipher_missing DataThunderSlbSslErrorOper#required_cipher_missing}
  */
  readonly requiredCipherMissing?: number;
  /**
  * reuse cert length not zero
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#reuse_cert_length_not_zero DataThunderSlbSslErrorOper#reuse_cert_length_not_zero}
  */
  readonly reuseCertLengthNotZero?: number;
  /**
  * reuse cert type not zero
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#reuse_cert_type_not_zero DataThunderSlbSslErrorOper#reuse_cert_type_not_zero}
  */
  readonly reuseCertTypeNotZero?: number;
  /**
  * reuse cipher list not zero
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#reuse_cipher_list_not_zero DataThunderSlbSslErrorOper#reuse_cipher_list_not_zero}
  */
  readonly reuseCipherListNotZero?: number;
  /**
  * scsv received when renegotiating
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#scsv_received_when_renegotiating DataThunderSlbSslErrorOper#scsv_received_when_renegotiating}
  */
  readonly scsvReceivedWhenRenegotiating?: number;
  /**
  * serverhello tlsext
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#serverhello_tlsext DataThunderSlbSslErrorOper#serverhello_tlsext}
  */
  readonly serverhelloTlsext?: number;
  /**
  * session id context uninitialized
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#session_id_context_uninitialized DataThunderSlbSslErrorOper#session_id_context_uninitialized}
  */
  readonly sessionIdContextUninitialized?: number;
  /**
  * short read
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#short_read DataThunderSlbSslErrorOper#short_read}
  */
  readonly shortRead?: number;
  /**
  * signature for non signing certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#signature_for_non_signing_certificate DataThunderSlbSslErrorOper#signature_for_non_signing_certificate}
  */
  readonly signatureForNonSigningCertificate?: number;
  /**
  * ssl23 doing session id reuse
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#ssl23_doing_session_id_reuse DataThunderSlbSslErrorOper#ssl23_doing_session_id_reuse}
  */
  readonly ssl23DoingSessionIdReuse?: number;
  /**
  * ssl2 connection id too long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#ssl2_connection_id_too_long DataThunderSlbSslErrorOper#ssl2_connection_id_too_long}
  */
  readonly ssl2ConnectionIdTooLong?: number;
  /**
  * ssl3 ext invalid servername
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#ssl3_ext_invalid_servername DataThunderSlbSslErrorOper#ssl3_ext_invalid_servername}
  */
  readonly ssl3ExtInvalidServername?: number;
  /**
  * ssl3 ext invalid servername type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#ssl3_ext_invalid_servername_type DataThunderSlbSslErrorOper#ssl3_ext_invalid_servername_type}
  */
  readonly ssl3ExtInvalidServernameType?: number;
  /**
  * ssl3 session id too long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#ssl3_session_id_too_long DataThunderSlbSslErrorOper#ssl3_session_id_too_long}
  */
  readonly ssl3SessionIdTooLong?: number;
  /**
  * ssl3 session id too short
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#ssl3_session_id_too_short DataThunderSlbSslErrorOper#ssl3_session_id_too_short}
  */
  readonly ssl3SessionIdTooShort?: number;
  /**
  * ssl ctx has no default ssl version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#ssl_ctx_has_no_default_ssl_version DataThunderSlbSslErrorOper#ssl_ctx_has_no_default_ssl_version}
  */
  readonly sslCtxHasNoDefaultSslVersion?: number;
  /**
  * ssl handshake failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#ssl_handshake_failure DataThunderSlbSslErrorOper#ssl_handshake_failure}
  */
  readonly sslHandshakeFailure?: number;
  /**
  * ssl library has no ciphers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#ssl_library_has_no_ciphers DataThunderSlbSslErrorOper#ssl_library_has_no_ciphers}
  */
  readonly sslLibraryHasNoCiphers?: number;
  /**
  * ssl session id callback failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#ssl_session_id_callback_failed DataThunderSlbSslErrorOper#ssl_session_id_callback_failed}
  */
  readonly sslSessionIdCallbackFailed?: number;
  /**
  * ssl session id conflict
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#ssl_session_id_conflict DataThunderSlbSslErrorOper#ssl_session_id_conflict}
  */
  readonly sslSessionIdConflict?: number;
  /**
  * ssl session id context too long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#ssl_session_id_context_too_long DataThunderSlbSslErrorOper#ssl_session_id_context_too_long}
  */
  readonly sslSessionIdContextTooLong?: number;
  /**
  * ssl session id has bad length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#ssl_session_id_has_bad_length DataThunderSlbSslErrorOper#ssl_session_id_has_bad_length}
  */
  readonly sslSessionIdHasBadLength?: number;
  /**
  * ssl session id is different
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#ssl_session_id_is_different DataThunderSlbSslErrorOper#ssl_session_id_is_different}
  */
  readonly sslSessionIdIsDifferent?: number;
  /**
  * sslv3 alert bad certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#sslv3_alert_bad_certificate DataThunderSlbSslErrorOper#sslv3_alert_bad_certificate}
  */
  readonly sslv3AlertBadCertificate?: number;
  /**
  * sslv3 alert bad record mac
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#sslv3_alert_bad_record_mac DataThunderSlbSslErrorOper#sslv3_alert_bad_record_mac}
  */
  readonly sslv3AlertBadRecordMac?: number;
  /**
  * sslv3 alert certificate expired
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#sslv3_alert_certificate_expired DataThunderSlbSslErrorOper#sslv3_alert_certificate_expired}
  */
  readonly sslv3AlertCertificateExpired?: number;
  /**
  * sslv3 alert certificate revoked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#sslv3_alert_certificate_revoked DataThunderSlbSslErrorOper#sslv3_alert_certificate_revoked}
  */
  readonly sslv3AlertCertificateRevoked?: number;
  /**
  * sslv3 alert certificate unknown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#sslv3_alert_certificate_unknown DataThunderSlbSslErrorOper#sslv3_alert_certificate_unknown}
  */
  readonly sslv3AlertCertificateUnknown?: number;
  /**
  * sslv3 alert decompression failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#sslv3_alert_decompression_failure DataThunderSlbSslErrorOper#sslv3_alert_decompression_failure}
  */
  readonly sslv3AlertDecompressionFailure?: number;
  /**
  * sslv3 alert handshake failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#sslv3_alert_handshake_failure DataThunderSlbSslErrorOper#sslv3_alert_handshake_failure}
  */
  readonly sslv3AlertHandshakeFailure?: number;
  /**
  * sslv3 alert illegal parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#sslv3_alert_illegal_parameter DataThunderSlbSslErrorOper#sslv3_alert_illegal_parameter}
  */
  readonly sslv3AlertIllegalParameter?: number;
  /**
  * sslv3 alert no certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#sslv3_alert_no_certificate DataThunderSlbSslErrorOper#sslv3_alert_no_certificate}
  */
  readonly sslv3AlertNoCertificate?: number;
  /**
  * sslv3 alert peer error cert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#sslv3_alert_peer_error_cert DataThunderSlbSslErrorOper#sslv3_alert_peer_error_cert}
  */
  readonly sslv3AlertPeerErrorCert?: number;
  /**
  * sslv3 alert peer error no cert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#sslv3_alert_peer_error_no_cert DataThunderSlbSslErrorOper#sslv3_alert_peer_error_no_cert}
  */
  readonly sslv3AlertPeerErrorNoCert?: number;
  /**
  * sslv3 alert peer error no cipher
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#sslv3_alert_peer_error_no_cipher DataThunderSlbSslErrorOper#sslv3_alert_peer_error_no_cipher}
  */
  readonly sslv3AlertPeerErrorNoCipher?: number;
  /**
  * sslv3 alert peer error unsupp cert type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#sslv3_alert_peer_error_unsupp_cert_type DataThunderSlbSslErrorOper#sslv3_alert_peer_error_unsupp_cert_type}
  */
  readonly sslv3AlertPeerErrorUnsuppCertType?: number;
  /**
  * sslv3 alert unexpected msg
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#sslv3_alert_unexpected_msg DataThunderSlbSslErrorOper#sslv3_alert_unexpected_msg}
  */
  readonly sslv3AlertUnexpectedMsg?: number;
  /**
  * sslv3 alert unknown remote err type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#sslv3_alert_unknown_remote_err_type DataThunderSlbSslErrorOper#sslv3_alert_unknown_remote_err_type}
  */
  readonly sslv3AlertUnknownRemoteErrType?: number;
  /**
  * sslv3 alert unspported cert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#sslv3_alert_unspported_cert DataThunderSlbSslErrorOper#sslv3_alert_unspported_cert}
  */
  readonly sslv3AlertUnspportedCert?: number;
  /**
  * tls client cert req with anon cipher
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#tls_client_cert_req_with_anon_cipher DataThunderSlbSslErrorOper#tls_client_cert_req_with_anon_cipher}
  */
  readonly tlsClientCertReqWithAnonCipher?: number;
  /**
  * tls invalid ecpointformat list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#tls_invalid_ecpointformat_list DataThunderSlbSslErrorOper#tls_invalid_ecpointformat_list}
  */
  readonly tlsInvalidEcpointformatList?: number;
  /**
  * tls peer did not respond with cert list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#tls_peer_did_not_respond_with_cert_list DataThunderSlbSslErrorOper#tls_peer_did_not_respond_with_cert_list}
  */
  readonly tlsPeerDidNotRespondWithCertList?: number;
  /**
  * tls rsa encrypted value length is wrong
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#tls_rsa_encrypted_value_length_is_wrong DataThunderSlbSslErrorOper#tls_rsa_encrypted_value_length_is_wrong}
  */
  readonly tlsRsaEncryptedValueLengthIsWrong?: number;
  /**
  * tlsv1 alert access denied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#tlsv1_alert_access_denied DataThunderSlbSslErrorOper#tlsv1_alert_access_denied}
  */
  readonly tlsv1AlertAccessDenied?: number;
  /**
  * tlsv1 alert decode error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#tlsv1_alert_decode_error DataThunderSlbSslErrorOper#tlsv1_alert_decode_error}
  */
  readonly tlsv1AlertDecodeError?: number;
  /**
  * tlsv1 alert decrypt error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#tlsv1_alert_decrypt_error DataThunderSlbSslErrorOper#tlsv1_alert_decrypt_error}
  */
  readonly tlsv1AlertDecryptError?: number;
  /**
  * tlsv1 alert decryption failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#tlsv1_alert_decryption_failed DataThunderSlbSslErrorOper#tlsv1_alert_decryption_failed}
  */
  readonly tlsv1AlertDecryptionFailed?: number;
  /**
  * tlsv1 alert export restriction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#tlsv1_alert_export_restriction DataThunderSlbSslErrorOper#tlsv1_alert_export_restriction}
  */
  readonly tlsv1AlertExportRestriction?: number;
  /**
  * tlsv1 alert insufficient security
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#tlsv1_alert_insufficient_security DataThunderSlbSslErrorOper#tlsv1_alert_insufficient_security}
  */
  readonly tlsv1AlertInsufficientSecurity?: number;
  /**
  * tlsv1 alert internal error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#tlsv1_alert_internal_error DataThunderSlbSslErrorOper#tlsv1_alert_internal_error}
  */
  readonly tlsv1AlertInternalError?: number;
  /**
  * tlsv1 alert no renegotiation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#tlsv1_alert_no_renegotiation DataThunderSlbSslErrorOper#tlsv1_alert_no_renegotiation}
  */
  readonly tlsv1AlertNoRenegotiation?: number;
  /**
  * tlsv1 alert protocol version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#tlsv1_alert_protocol_version DataThunderSlbSslErrorOper#tlsv1_alert_protocol_version}
  */
  readonly tlsv1AlertProtocolVersion?: number;
  /**
  * tlsv1 alert record overflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#tlsv1_alert_record_overflow DataThunderSlbSslErrorOper#tlsv1_alert_record_overflow}
  */
  readonly tlsv1AlertRecordOverflow?: number;
  /**
  * tlsv1 alert unknown ca
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#tlsv1_alert_unknown_ca DataThunderSlbSslErrorOper#tlsv1_alert_unknown_ca}
  */
  readonly tlsv1AlertUnknownCa?: number;
  /**
  * tlsv1 alert user cancelled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#tlsv1_alert_user_cancelled DataThunderSlbSslErrorOper#tlsv1_alert_user_cancelled}
  */
  readonly tlsv1AlertUserCancelled?: number;
  /**
  * tried to use unsupported cipher
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#tried_to_use_unsupported_cipher DataThunderSlbSslErrorOper#tried_to_use_unsupported_cipher}
  */
  readonly triedToUseUnsupportedCipher?: number;
  /**
  * unable to decode dh certs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#unable_to_decode_dh_certs DataThunderSlbSslErrorOper#unable_to_decode_dh_certs}
  */
  readonly unableToDecodeDhCerts?: number;
  /**
  * unable to extract public key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#unable_to_extract_public_key DataThunderSlbSslErrorOper#unable_to_extract_public_key}
  */
  readonly unableToExtractPublicKey?: number;
  /**
  * unable to find dh parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#unable_to_find_dh_parameters DataThunderSlbSslErrorOper#unable_to_find_dh_parameters}
  */
  readonly unableToFindDhParameters?: number;
  /**
  * unable to find public key parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#unable_to_find_public_key_parameters DataThunderSlbSslErrorOper#unable_to_find_public_key_parameters}
  */
  readonly unableToFindPublicKeyParameters?: number;
  /**
  * unable to find ssl method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#unable_to_find_ssl_method DataThunderSlbSslErrorOper#unable_to_find_ssl_method}
  */
  readonly unableToFindSslMethod?: number;
  /**
  * unable to load ssl2 md5 routines
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#unable_to_load_ssl2_md5_routines DataThunderSlbSslErrorOper#unable_to_load_ssl2_md5_routines}
  */
  readonly unableToLoadSsl2Md5Routines?: number;
  /**
  * unable to load ssl3 md5 routines
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#unable_to_load_ssl3_md5_routines DataThunderSlbSslErrorOper#unable_to_load_ssl3_md5_routines}
  */
  readonly unableToLoadSsl3Md5Routines?: number;
  /**
  * unable to load ssl3 sha1 routines
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#unable_to_load_ssl3_sha1_routines DataThunderSlbSslErrorOper#unable_to_load_ssl3_sha1_routines}
  */
  readonly unableToLoadSsl3Sha1Routines?: number;
  /**
  * unexpected message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#unexpected_message DataThunderSlbSslErrorOper#unexpected_message}
  */
  readonly unexpectedMessage?: number;
  /**
  * unexpected record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#unexpected_record DataThunderSlbSslErrorOper#unexpected_record}
  */
  readonly unexpectedRecord?: number;
  /**
  * uninitialized
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#uninitialized DataThunderSlbSslErrorOper#uninitialized}
  */
  readonly uninitialized?: number;
  /**
  * unknown alert type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#unknown_alert_type DataThunderSlbSslErrorOper#unknown_alert_type}
  */
  readonly unknownAlertType?: number;
  /**
  * unknown certificate type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#unknown_certificate_type DataThunderSlbSslErrorOper#unknown_certificate_type}
  */
  readonly unknownCertificateType?: number;
  /**
  * unknown cipher returned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#unknown_cipher_returned DataThunderSlbSslErrorOper#unknown_cipher_returned}
  */
  readonly unknownCipherReturned?: number;
  /**
  * unknown cipher type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#unknown_cipher_type DataThunderSlbSslErrorOper#unknown_cipher_type}
  */
  readonly unknownCipherType?: number;
  /**
  * unknown key exchange type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#unknown_key_exchange_type DataThunderSlbSslErrorOper#unknown_key_exchange_type}
  */
  readonly unknownKeyExchangeType?: number;
  /**
  * unknown pkey type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#unknown_pkey_type DataThunderSlbSslErrorOper#unknown_pkey_type}
  */
  readonly unknownPkeyType?: number;
  /**
  * unknown protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#unknown_protocol DataThunderSlbSslErrorOper#unknown_protocol}
  */
  readonly unknownProtocol?: number;
  /**
  * unknown remote error type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#unknown_remote_error_type DataThunderSlbSslErrorOper#unknown_remote_error_type}
  */
  readonly unknownRemoteErrorType?: number;
  /**
  * unknown ssl version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#unknown_ssl_version DataThunderSlbSslErrorOper#unknown_ssl_version}
  */
  readonly unknownSslVersion?: number;
  /**
  * unknown state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#unknown_state DataThunderSlbSslErrorOper#unknown_state}
  */
  readonly unknownState?: number;
  /**
  * unsupported cipher
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#unsupported_cipher DataThunderSlbSslErrorOper#unsupported_cipher}
  */
  readonly unsupportedCipher?: number;
  /**
  * unsupported compression algorithm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#unsupported_compression_algorithm DataThunderSlbSslErrorOper#unsupported_compression_algorithm}
  */
  readonly unsupportedCompressionAlgorithm?: number;
  /**
  * unsupported digest type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#unsupported_digest_type DataThunderSlbSslErrorOper#unsupported_digest_type}
  */
  readonly unsupportedDigestType?: number;
  /**
  * unsupported elliptic curve
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#unsupported_elliptic_curve DataThunderSlbSslErrorOper#unsupported_elliptic_curve}
  */
  readonly unsupportedEllipticCurve?: number;
  /**
  * unsupported option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#unsupported_option DataThunderSlbSslErrorOper#unsupported_option}
  */
  readonly unsupportedOption?: number;
  /**
  * unsupported protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#unsupported_protocol DataThunderSlbSslErrorOper#unsupported_protocol}
  */
  readonly unsupportedProtocol?: number;
  /**
  * unsupported ssl version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#unsupported_ssl_version DataThunderSlbSslErrorOper#unsupported_ssl_version}
  */
  readonly unsupportedSslVersion?: number;
  /**
  * unsupported status type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#unsupported_status_type DataThunderSlbSslErrorOper#unsupported_status_type}
  */
  readonly unsupportedStatusType?: number;
  /**
  * write bio not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#write_bio_not_set DataThunderSlbSslErrorOper#write_bio_not_set}
  */
  readonly writeBioNotSet?: number;
  /**
  * wrong cipher returned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#wrong_cipher_returned DataThunderSlbSslErrorOper#wrong_cipher_returned}
  */
  readonly wrongCipherReturned?: number;
  /**
  * wrong message type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#wrong_message_type DataThunderSlbSslErrorOper#wrong_message_type}
  */
  readonly wrongMessageType?: number;
  /**
  * wrong number of key bits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#wrong_number_of_key_bits DataThunderSlbSslErrorOper#wrong_number_of_key_bits}
  */
  readonly wrongNumberOfKeyBits?: number;
  /**
  * wrong signature length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#wrong_signature_length DataThunderSlbSslErrorOper#wrong_signature_length}
  */
  readonly wrongSignatureLength?: number;
  /**
  * wrong signature size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#wrong_signature_size DataThunderSlbSslErrorOper#wrong_signature_size}
  */
  readonly wrongSignatureSize?: number;
  /**
  * wrong ssl version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#wrong_ssl_version DataThunderSlbSslErrorOper#wrong_ssl_version}
  */
  readonly wrongSslVersion?: number;
  /**
  * wrong version number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#wrong_version_number DataThunderSlbSslErrorOper#wrong_version_number}
  */
  readonly wrongVersionNumber?: number;
  /**
  * x509 lib
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#x509_lib DataThunderSlbSslErrorOper#x509_lib}
  */
  readonly x509Lib?: number;
  /**
  * x509 verification setup problems
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#x509_verification_setup_problems DataThunderSlbSslErrorOper#x509_verification_setup_problems}
  */
  readonly x509VerificationSetupProblems?: number;
}

export function dataThunderSlbSslErrorOperOperToTerraform(struct?: DataThunderSlbSslErrorOperOperOutputReference | DataThunderSlbSslErrorOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_data_in_handshake: cdktf.numberToTerraform(struct!.appDataInHandshake),
    attempt_to_reuse_sess_in_diff_context: cdktf.numberToTerraform(struct!.attemptToReuseSessInDiffContext),
    bad_alert_record: cdktf.numberToTerraform(struct!.badAlertRecord),
    bad_authentication_type: cdktf.numberToTerraform(struct!.badAuthenticationType),
    bad_change_cipher_spec: cdktf.numberToTerraform(struct!.badChangeCipherSpec),
    bad_checksum: cdktf.numberToTerraform(struct!.badChecksum),
    bad_data_returned_by_callback: cdktf.numberToTerraform(struct!.badDataReturnedByCallback),
    bad_decompression: cdktf.numberToTerraform(struct!.badDecompression),
    bad_dh_g_length: cdktf.numberToTerraform(struct!.badDhGLength),
    bad_dh_p_length: cdktf.numberToTerraform(struct!.badDhPLength),
    bad_dh_pub_key_length: cdktf.numberToTerraform(struct!.badDhPubKeyLength),
    bad_digest_length: cdktf.numberToTerraform(struct!.badDigestLength),
    bad_dsa_signature: cdktf.numberToTerraform(struct!.badDsaSignature),
    bad_ecc_cert: cdktf.numberToTerraform(struct!.badEccCert),
    bad_ecdsa_sig: cdktf.numberToTerraform(struct!.badEcdsaSig),
    bad_ecpoint: cdktf.numberToTerraform(struct!.badEcpoint),
    bad_handshake_length: cdktf.numberToTerraform(struct!.badHandshakeLength),
    bad_hello_request: cdktf.numberToTerraform(struct!.badHelloRequest),
    bad_length: cdktf.numberToTerraform(struct!.badLength),
    bad_mac_decode: cdktf.numberToTerraform(struct!.badMacDecode),
    bad_message_type: cdktf.numberToTerraform(struct!.badMessageType),
    bad_packet_length: cdktf.numberToTerraform(struct!.badPacketLength),
    bad_protocol_version_number: cdktf.numberToTerraform(struct!.badProtocolVersionNumber),
    bad_response_argument: cdktf.numberToTerraform(struct!.badResponseArgument),
    bad_rsa_decrypt: cdktf.numberToTerraform(struct!.badRsaDecrypt),
    bad_rsa_e_length: cdktf.numberToTerraform(struct!.badRsaELength),
    bad_rsa_encrypt: cdktf.numberToTerraform(struct!.badRsaEncrypt),
    bad_rsa_modulus_length: cdktf.numberToTerraform(struct!.badRsaModulusLength),
    bad_rsa_signature: cdktf.numberToTerraform(struct!.badRsaSignature),
    bad_signature: cdktf.numberToTerraform(struct!.badSignature),
    bad_ssl_filetype: cdktf.numberToTerraform(struct!.badSslFiletype),
    bad_ssl_session_id_length: cdktf.numberToTerraform(struct!.badSslSessionIdLength),
    bad_state: cdktf.numberToTerraform(struct!.badState),
    bad_write_retry: cdktf.numberToTerraform(struct!.badWriteRetry),
    bio_not_set: cdktf.numberToTerraform(struct!.bioNotSet),
    block_cipher_pad_is_wrong: cdktf.numberToTerraform(struct!.blockCipherPadIsWrong),
    bn_lib: cdktf.numberToTerraform(struct!.bnLib),
    ca_dn_length_mismatch: cdktf.numberToTerraform(struct!.caDnLengthMismatch),
    ca_dn_too_long: cdktf.numberToTerraform(struct!.caDnTooLong),
    ccs_received_early: cdktf.numberToTerraform(struct!.ccsReceivedEarly),
    cert_length_mismatch: cdktf.numberToTerraform(struct!.certLengthMismatch),
    certificate_verify_failed: cdktf.numberToTerraform(struct!.certificateVerifyFailed),
    challenge_is_different: cdktf.numberToTerraform(struct!.challengeIsDifferent),
    cipher_code_wrong_length: cdktf.numberToTerraform(struct!.cipherCodeWrongLength),
    cipher_or_hash_unavailable: cdktf.numberToTerraform(struct!.cipherOrHashUnavailable),
    cipher_table_src_error: cdktf.numberToTerraform(struct!.cipherTableSrcError),
    clienthello_tlsext: cdktf.numberToTerraform(struct!.clienthelloTlsext),
    compressed_length_too_long: cdktf.numberToTerraform(struct!.compressedLengthTooLong),
    compression_failure: cdktf.numberToTerraform(struct!.compressionFailure),
    compression_library_error: cdktf.numberToTerraform(struct!.compressionLibraryError),
    connection_id_is_different: cdktf.numberToTerraform(struct!.connectionIdIsDifferent),
    connection_type_not_set: cdktf.numberToTerraform(struct!.connectionTypeNotSet),
    cookie_mismatch: cdktf.numberToTerraform(struct!.cookieMismatch),
    data_between_ccs_and_finished: cdktf.numberToTerraform(struct!.dataBetweenCcsAndFinished),
    data_length_too_long: cdktf.numberToTerraform(struct!.dataLengthTooLong),
    decryption_failed: cdktf.numberToTerraform(struct!.decryptionFailed),
    decryption_failed_or_bad_record_mac: cdktf.numberToTerraform(struct!.decryptionFailedOrBadRecordMac),
    dh_public_value_length_is_wrong: cdktf.numberToTerraform(struct!.dhPublicValueLengthIsWrong),
    digest_check_failed: cdktf.numberToTerraform(struct!.digestCheckFailed),
    encrypted_length_too_long: cdktf.numberToTerraform(struct!.encryptedLengthTooLong),
    error_generating_tmp_rsa_key: cdktf.numberToTerraform(struct!.errorGeneratingTmpRsaKey),
    error_in_received_cipher_list: cdktf.numberToTerraform(struct!.errorInReceivedCipherList),
    excessive_message_size: cdktf.numberToTerraform(struct!.excessiveMessageSize),
    extra_data_in_message: cdktf.numberToTerraform(struct!.extraDataInMessage),
    got_a_fin_before_a_ccs: cdktf.numberToTerraform(struct!.gotAFinBeforeACcs),
    http_request: cdktf.numberToTerraform(struct!.httpRequest),
    https_proxy_request: cdktf.numberToTerraform(struct!.httpsProxyRequest),
    illegal_padding: cdktf.numberToTerraform(struct!.illegalPadding),
    inappropriate_fallback: cdktf.numberToTerraform(struct!.inappropriateFallback),
    invalid_challenge_length: cdktf.numberToTerraform(struct!.invalidChallengeLength),
    invalid_command: cdktf.numberToTerraform(struct!.invalidCommand),
    invalid_purpose: cdktf.numberToTerraform(struct!.invalidPurpose),
    invalid_status_response: cdktf.numberToTerraform(struct!.invalidStatusResponse),
    invalid_trust: cdktf.numberToTerraform(struct!.invalidTrust),
    key_arg_too_long: cdktf.numberToTerraform(struct!.keyArgTooLong),
    krb5: cdktf.numberToTerraform(struct!.krb5),
    krb5_client_cc_principal: cdktf.numberToTerraform(struct!.krb5ClientCcPrincipal),
    krb5_client_get_cred: cdktf.numberToTerraform(struct!.krb5ClientGetCred),
    krb5_client_init: cdktf.numberToTerraform(struct!.krb5ClientInit),
    krb5_client_mk_req: cdktf.numberToTerraform(struct!.krb5ClientMkReq),
    krb5_server_bad_ticket: cdktf.numberToTerraform(struct!.krb5ServerBadTicket),
    krb5_server_init: cdktf.numberToTerraform(struct!.krb5ServerInit),
    krb5_server_rd_req: cdktf.numberToTerraform(struct!.krb5ServerRdReq),
    krb5_server_tkt_expired: cdktf.numberToTerraform(struct!.krb5ServerTktExpired),
    krb5_server_tkt_not_yet_valid: cdktf.numberToTerraform(struct!.krb5ServerTktNotYetValid),
    krb5_server_tkt_skew: cdktf.numberToTerraform(struct!.krb5ServerTktSkew),
    length_mismatch: cdktf.numberToTerraform(struct!.lengthMismatch),
    length_too_short: cdktf.numberToTerraform(struct!.lengthTooShort),
    library_bug: cdktf.numberToTerraform(struct!.libraryBug),
    library_has_no_ciphers: cdktf.numberToTerraform(struct!.libraryHasNoCiphers),
    mast_key_too_long: cdktf.numberToTerraform(struct!.mastKeyTooLong),
    message_too_long: cdktf.numberToTerraform(struct!.messageTooLong),
    missing_dh_dsa_cert: cdktf.numberToTerraform(struct!.missingDhDsaCert),
    missing_dh_key: cdktf.numberToTerraform(struct!.missingDhKey),
    missing_dh_rsa_cert: cdktf.numberToTerraform(struct!.missingDhRsaCert),
    missing_dsa_signing_cert: cdktf.numberToTerraform(struct!.missingDsaSigningCert),
    missing_export_tmp_dh_key: cdktf.numberToTerraform(struct!.missingExportTmpDhKey),
    missing_export_tmp_rsa_key: cdktf.numberToTerraform(struct!.missingExportTmpRsaKey),
    missing_rsa_certificate: cdktf.numberToTerraform(struct!.missingRsaCertificate),
    missing_rsa_encrypting_cert: cdktf.numberToTerraform(struct!.missingRsaEncryptingCert),
    missing_rsa_signing_cert: cdktf.numberToTerraform(struct!.missingRsaSigningCert),
    missing_tmp_dh_key: cdktf.numberToTerraform(struct!.missingTmpDhKey),
    missing_tmp_rsa_key: cdktf.numberToTerraform(struct!.missingTmpRsaKey),
    missing_tmp_rsa_pkey: cdktf.numberToTerraform(struct!.missingTmpRsaPkey),
    missing_verify_message: cdktf.numberToTerraform(struct!.missingVerifyMessage),
    multiple_sgc_restarts: cdktf.numberToTerraform(struct!.multipleSgcRestarts),
    no_certificate_assigned: cdktf.numberToTerraform(struct!.noCertificateAssigned),
    no_certificate_returned: cdktf.numberToTerraform(struct!.noCertificateReturned),
    no_certificate_set: cdktf.numberToTerraform(struct!.noCertificateSet),
    no_certificate_specified: cdktf.numberToTerraform(struct!.noCertificateSpecified),
    no_certificates_returned: cdktf.numberToTerraform(struct!.noCertificatesReturned),
    no_cipher_list: cdktf.numberToTerraform(struct!.noCipherList),
    no_cipher_match: cdktf.numberToTerraform(struct!.noCipherMatch),
    no_ciphers_available: cdktf.numberToTerraform(struct!.noCiphersAvailable),
    no_ciphers_passed: cdktf.numberToTerraform(struct!.noCiphersPassed),
    no_ciphers_specified: cdktf.numberToTerraform(struct!.noCiphersSpecified),
    no_client_cert_received: cdktf.numberToTerraform(struct!.noClientCertReceived),
    no_compression_specified: cdktf.numberToTerraform(struct!.noCompressionSpecified),
    no_method_specified: cdktf.numberToTerraform(struct!.noMethodSpecified),
    no_private_key_assigned: cdktf.numberToTerraform(struct!.noPrivateKeyAssigned),
    no_privatekey: cdktf.numberToTerraform(struct!.noPrivatekey),
    no_protocols_available: cdktf.numberToTerraform(struct!.noProtocolsAvailable),
    no_publickey: cdktf.numberToTerraform(struct!.noPublickey),
    no_required_digest: cdktf.numberToTerraform(struct!.noRequiredDigest),
    no_shared_cipher: cdktf.numberToTerraform(struct!.noSharedCipher),
    no_verify_callback: cdktf.numberToTerraform(struct!.noVerifyCallback),
    non_sslv2_initial_packet: cdktf.numberToTerraform(struct!.nonSslv2InitialPacket),
    null_ssl_ctx: cdktf.numberToTerraform(struct!.nullSslCtx),
    null_ssl_method_passed: cdktf.numberToTerraform(struct!.nullSslMethodPassed),
    old_session_cipher_not_returned: cdktf.numberToTerraform(struct!.oldSessionCipherNotReturned),
    packet_length_too_long: cdktf.numberToTerraform(struct!.packetLengthTooLong),
    parse_tlsext: cdktf.numberToTerraform(struct!.parseTlsext),
    path_too_long: cdktf.numberToTerraform(struct!.pathTooLong),
    peer_did_not_return_a_certificate: cdktf.numberToTerraform(struct!.peerDidNotReturnACertificate),
    peer_error: cdktf.numberToTerraform(struct!.peerError),
    peer_error_certificate: cdktf.numberToTerraform(struct!.peerErrorCertificate),
    peer_error_no_certificate: cdktf.numberToTerraform(struct!.peerErrorNoCertificate),
    peer_error_no_cipher: cdktf.numberToTerraform(struct!.peerErrorNoCipher),
    peer_error_unsupported_certificate_type: cdktf.numberToTerraform(struct!.peerErrorUnsupportedCertificateType),
    pre_mac_length_too_long: cdktf.numberToTerraform(struct!.preMacLengthTooLong),
    problems_mapping_cipher_functions: cdktf.numberToTerraform(struct!.problemsMappingCipherFunctions),
    protocol_is_shutdown: cdktf.numberToTerraform(struct!.protocolIsShutdown),
    public_key_encrypt_error: cdktf.numberToTerraform(struct!.publicKeyEncryptError),
    public_key_is_not_rsa: cdktf.numberToTerraform(struct!.publicKeyIsNotRsa),
    public_key_not_rsa: cdktf.numberToTerraform(struct!.publicKeyNotRsa),
    read_bio_not_set: cdktf.numberToTerraform(struct!.readBioNotSet),
    read_wrong_packet_type: cdktf.numberToTerraform(struct!.readWrongPacketType),
    record_length_mismatch: cdktf.numberToTerraform(struct!.recordLengthMismatch),
    record_too_large: cdktf.numberToTerraform(struct!.recordTooLarge),
    record_too_small: cdktf.numberToTerraform(struct!.recordTooSmall),
    required_cipher_missing: cdktf.numberToTerraform(struct!.requiredCipherMissing),
    reuse_cert_length_not_zero: cdktf.numberToTerraform(struct!.reuseCertLengthNotZero),
    reuse_cert_type_not_zero: cdktf.numberToTerraform(struct!.reuseCertTypeNotZero),
    reuse_cipher_list_not_zero: cdktf.numberToTerraform(struct!.reuseCipherListNotZero),
    scsv_received_when_renegotiating: cdktf.numberToTerraform(struct!.scsvReceivedWhenRenegotiating),
    serverhello_tlsext: cdktf.numberToTerraform(struct!.serverhelloTlsext),
    session_id_context_uninitialized: cdktf.numberToTerraform(struct!.sessionIdContextUninitialized),
    short_read: cdktf.numberToTerraform(struct!.shortRead),
    signature_for_non_signing_certificate: cdktf.numberToTerraform(struct!.signatureForNonSigningCertificate),
    ssl23_doing_session_id_reuse: cdktf.numberToTerraform(struct!.ssl23DoingSessionIdReuse),
    ssl2_connection_id_too_long: cdktf.numberToTerraform(struct!.ssl2ConnectionIdTooLong),
    ssl3_ext_invalid_servername: cdktf.numberToTerraform(struct!.ssl3ExtInvalidServername),
    ssl3_ext_invalid_servername_type: cdktf.numberToTerraform(struct!.ssl3ExtInvalidServernameType),
    ssl3_session_id_too_long: cdktf.numberToTerraform(struct!.ssl3SessionIdTooLong),
    ssl3_session_id_too_short: cdktf.numberToTerraform(struct!.ssl3SessionIdTooShort),
    ssl_ctx_has_no_default_ssl_version: cdktf.numberToTerraform(struct!.sslCtxHasNoDefaultSslVersion),
    ssl_handshake_failure: cdktf.numberToTerraform(struct!.sslHandshakeFailure),
    ssl_library_has_no_ciphers: cdktf.numberToTerraform(struct!.sslLibraryHasNoCiphers),
    ssl_session_id_callback_failed: cdktf.numberToTerraform(struct!.sslSessionIdCallbackFailed),
    ssl_session_id_conflict: cdktf.numberToTerraform(struct!.sslSessionIdConflict),
    ssl_session_id_context_too_long: cdktf.numberToTerraform(struct!.sslSessionIdContextTooLong),
    ssl_session_id_has_bad_length: cdktf.numberToTerraform(struct!.sslSessionIdHasBadLength),
    ssl_session_id_is_different: cdktf.numberToTerraform(struct!.sslSessionIdIsDifferent),
    sslv3_alert_bad_certificate: cdktf.numberToTerraform(struct!.sslv3AlertBadCertificate),
    sslv3_alert_bad_record_mac: cdktf.numberToTerraform(struct!.sslv3AlertBadRecordMac),
    sslv3_alert_certificate_expired: cdktf.numberToTerraform(struct!.sslv3AlertCertificateExpired),
    sslv3_alert_certificate_revoked: cdktf.numberToTerraform(struct!.sslv3AlertCertificateRevoked),
    sslv3_alert_certificate_unknown: cdktf.numberToTerraform(struct!.sslv3AlertCertificateUnknown),
    sslv3_alert_decompression_failure: cdktf.numberToTerraform(struct!.sslv3AlertDecompressionFailure),
    sslv3_alert_handshake_failure: cdktf.numberToTerraform(struct!.sslv3AlertHandshakeFailure),
    sslv3_alert_illegal_parameter: cdktf.numberToTerraform(struct!.sslv3AlertIllegalParameter),
    sslv3_alert_no_certificate: cdktf.numberToTerraform(struct!.sslv3AlertNoCertificate),
    sslv3_alert_peer_error_cert: cdktf.numberToTerraform(struct!.sslv3AlertPeerErrorCert),
    sslv3_alert_peer_error_no_cert: cdktf.numberToTerraform(struct!.sslv3AlertPeerErrorNoCert),
    sslv3_alert_peer_error_no_cipher: cdktf.numberToTerraform(struct!.sslv3AlertPeerErrorNoCipher),
    sslv3_alert_peer_error_unsupp_cert_type: cdktf.numberToTerraform(struct!.sslv3AlertPeerErrorUnsuppCertType),
    sslv3_alert_unexpected_msg: cdktf.numberToTerraform(struct!.sslv3AlertUnexpectedMsg),
    sslv3_alert_unknown_remote_err_type: cdktf.numberToTerraform(struct!.sslv3AlertUnknownRemoteErrType),
    sslv3_alert_unspported_cert: cdktf.numberToTerraform(struct!.sslv3AlertUnspportedCert),
    tls_client_cert_req_with_anon_cipher: cdktf.numberToTerraform(struct!.tlsClientCertReqWithAnonCipher),
    tls_invalid_ecpointformat_list: cdktf.numberToTerraform(struct!.tlsInvalidEcpointformatList),
    tls_peer_did_not_respond_with_cert_list: cdktf.numberToTerraform(struct!.tlsPeerDidNotRespondWithCertList),
    tls_rsa_encrypted_value_length_is_wrong: cdktf.numberToTerraform(struct!.tlsRsaEncryptedValueLengthIsWrong),
    tlsv1_alert_access_denied: cdktf.numberToTerraform(struct!.tlsv1AlertAccessDenied),
    tlsv1_alert_decode_error: cdktf.numberToTerraform(struct!.tlsv1AlertDecodeError),
    tlsv1_alert_decrypt_error: cdktf.numberToTerraform(struct!.tlsv1AlertDecryptError),
    tlsv1_alert_decryption_failed: cdktf.numberToTerraform(struct!.tlsv1AlertDecryptionFailed),
    tlsv1_alert_export_restriction: cdktf.numberToTerraform(struct!.tlsv1AlertExportRestriction),
    tlsv1_alert_insufficient_security: cdktf.numberToTerraform(struct!.tlsv1AlertInsufficientSecurity),
    tlsv1_alert_internal_error: cdktf.numberToTerraform(struct!.tlsv1AlertInternalError),
    tlsv1_alert_no_renegotiation: cdktf.numberToTerraform(struct!.tlsv1AlertNoRenegotiation),
    tlsv1_alert_protocol_version: cdktf.numberToTerraform(struct!.tlsv1AlertProtocolVersion),
    tlsv1_alert_record_overflow: cdktf.numberToTerraform(struct!.tlsv1AlertRecordOverflow),
    tlsv1_alert_unknown_ca: cdktf.numberToTerraform(struct!.tlsv1AlertUnknownCa),
    tlsv1_alert_user_cancelled: cdktf.numberToTerraform(struct!.tlsv1AlertUserCancelled),
    tried_to_use_unsupported_cipher: cdktf.numberToTerraform(struct!.triedToUseUnsupportedCipher),
    unable_to_decode_dh_certs: cdktf.numberToTerraform(struct!.unableToDecodeDhCerts),
    unable_to_extract_public_key: cdktf.numberToTerraform(struct!.unableToExtractPublicKey),
    unable_to_find_dh_parameters: cdktf.numberToTerraform(struct!.unableToFindDhParameters),
    unable_to_find_public_key_parameters: cdktf.numberToTerraform(struct!.unableToFindPublicKeyParameters),
    unable_to_find_ssl_method: cdktf.numberToTerraform(struct!.unableToFindSslMethod),
    unable_to_load_ssl2_md5_routines: cdktf.numberToTerraform(struct!.unableToLoadSsl2Md5Routines),
    unable_to_load_ssl3_md5_routines: cdktf.numberToTerraform(struct!.unableToLoadSsl3Md5Routines),
    unable_to_load_ssl3_sha1_routines: cdktf.numberToTerraform(struct!.unableToLoadSsl3Sha1Routines),
    unexpected_message: cdktf.numberToTerraform(struct!.unexpectedMessage),
    unexpected_record: cdktf.numberToTerraform(struct!.unexpectedRecord),
    uninitialized: cdktf.numberToTerraform(struct!.uninitialized),
    unknown_alert_type: cdktf.numberToTerraform(struct!.unknownAlertType),
    unknown_certificate_type: cdktf.numberToTerraform(struct!.unknownCertificateType),
    unknown_cipher_returned: cdktf.numberToTerraform(struct!.unknownCipherReturned),
    unknown_cipher_type: cdktf.numberToTerraform(struct!.unknownCipherType),
    unknown_key_exchange_type: cdktf.numberToTerraform(struct!.unknownKeyExchangeType),
    unknown_pkey_type: cdktf.numberToTerraform(struct!.unknownPkeyType),
    unknown_protocol: cdktf.numberToTerraform(struct!.unknownProtocol),
    unknown_remote_error_type: cdktf.numberToTerraform(struct!.unknownRemoteErrorType),
    unknown_ssl_version: cdktf.numberToTerraform(struct!.unknownSslVersion),
    unknown_state: cdktf.numberToTerraform(struct!.unknownState),
    unsupported_cipher: cdktf.numberToTerraform(struct!.unsupportedCipher),
    unsupported_compression_algorithm: cdktf.numberToTerraform(struct!.unsupportedCompressionAlgorithm),
    unsupported_digest_type: cdktf.numberToTerraform(struct!.unsupportedDigestType),
    unsupported_elliptic_curve: cdktf.numberToTerraform(struct!.unsupportedEllipticCurve),
    unsupported_option: cdktf.numberToTerraform(struct!.unsupportedOption),
    unsupported_protocol: cdktf.numberToTerraform(struct!.unsupportedProtocol),
    unsupported_ssl_version: cdktf.numberToTerraform(struct!.unsupportedSslVersion),
    unsupported_status_type: cdktf.numberToTerraform(struct!.unsupportedStatusType),
    write_bio_not_set: cdktf.numberToTerraform(struct!.writeBioNotSet),
    wrong_cipher_returned: cdktf.numberToTerraform(struct!.wrongCipherReturned),
    wrong_message_type: cdktf.numberToTerraform(struct!.wrongMessageType),
    wrong_number_of_key_bits: cdktf.numberToTerraform(struct!.wrongNumberOfKeyBits),
    wrong_signature_length: cdktf.numberToTerraform(struct!.wrongSignatureLength),
    wrong_signature_size: cdktf.numberToTerraform(struct!.wrongSignatureSize),
    wrong_ssl_version: cdktf.numberToTerraform(struct!.wrongSslVersion),
    wrong_version_number: cdktf.numberToTerraform(struct!.wrongVersionNumber),
    x509_lib: cdktf.numberToTerraform(struct!.x509Lib),
    x509_verification_setup_problems: cdktf.numberToTerraform(struct!.x509VerificationSetupProblems),
  }
}


export function dataThunderSlbSslErrorOperOperToHclTerraform(struct?: DataThunderSlbSslErrorOperOperOutputReference | DataThunderSlbSslErrorOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_data_in_handshake: {
      value: cdktf.numberToHclTerraform(struct!.appDataInHandshake),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    attempt_to_reuse_sess_in_diff_context: {
      value: cdktf.numberToHclTerraform(struct!.attemptToReuseSessInDiffContext),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_alert_record: {
      value: cdktf.numberToHclTerraform(struct!.badAlertRecord),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_authentication_type: {
      value: cdktf.numberToHclTerraform(struct!.badAuthenticationType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_change_cipher_spec: {
      value: cdktf.numberToHclTerraform(struct!.badChangeCipherSpec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_checksum: {
      value: cdktf.numberToHclTerraform(struct!.badChecksum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_data_returned_by_callback: {
      value: cdktf.numberToHclTerraform(struct!.badDataReturnedByCallback),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_decompression: {
      value: cdktf.numberToHclTerraform(struct!.badDecompression),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_dh_g_length: {
      value: cdktf.numberToHclTerraform(struct!.badDhGLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_dh_p_length: {
      value: cdktf.numberToHclTerraform(struct!.badDhPLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_dh_pub_key_length: {
      value: cdktf.numberToHclTerraform(struct!.badDhPubKeyLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_digest_length: {
      value: cdktf.numberToHclTerraform(struct!.badDigestLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_dsa_signature: {
      value: cdktf.numberToHclTerraform(struct!.badDsaSignature),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_ecc_cert: {
      value: cdktf.numberToHclTerraform(struct!.badEccCert),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_ecdsa_sig: {
      value: cdktf.numberToHclTerraform(struct!.badEcdsaSig),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_ecpoint: {
      value: cdktf.numberToHclTerraform(struct!.badEcpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_handshake_length: {
      value: cdktf.numberToHclTerraform(struct!.badHandshakeLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_hello_request: {
      value: cdktf.numberToHclTerraform(struct!.badHelloRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_length: {
      value: cdktf.numberToHclTerraform(struct!.badLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_mac_decode: {
      value: cdktf.numberToHclTerraform(struct!.badMacDecode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_message_type: {
      value: cdktf.numberToHclTerraform(struct!.badMessageType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_packet_length: {
      value: cdktf.numberToHclTerraform(struct!.badPacketLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_protocol_version_number: {
      value: cdktf.numberToHclTerraform(struct!.badProtocolVersionNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_response_argument: {
      value: cdktf.numberToHclTerraform(struct!.badResponseArgument),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_rsa_decrypt: {
      value: cdktf.numberToHclTerraform(struct!.badRsaDecrypt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_rsa_e_length: {
      value: cdktf.numberToHclTerraform(struct!.badRsaELength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_rsa_encrypt: {
      value: cdktf.numberToHclTerraform(struct!.badRsaEncrypt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_rsa_modulus_length: {
      value: cdktf.numberToHclTerraform(struct!.badRsaModulusLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_rsa_signature: {
      value: cdktf.numberToHclTerraform(struct!.badRsaSignature),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_signature: {
      value: cdktf.numberToHclTerraform(struct!.badSignature),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_ssl_filetype: {
      value: cdktf.numberToHclTerraform(struct!.badSslFiletype),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_ssl_session_id_length: {
      value: cdktf.numberToHclTerraform(struct!.badSslSessionIdLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_state: {
      value: cdktf.numberToHclTerraform(struct!.badState),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_write_retry: {
      value: cdktf.numberToHclTerraform(struct!.badWriteRetry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bio_not_set: {
      value: cdktf.numberToHclTerraform(struct!.bioNotSet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    block_cipher_pad_is_wrong: {
      value: cdktf.numberToHclTerraform(struct!.blockCipherPadIsWrong),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bn_lib: {
      value: cdktf.numberToHclTerraform(struct!.bnLib),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ca_dn_length_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.caDnLengthMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ca_dn_too_long: {
      value: cdktf.numberToHclTerraform(struct!.caDnTooLong),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ccs_received_early: {
      value: cdktf.numberToHclTerraform(struct!.ccsReceivedEarly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cert_length_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.certLengthMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    certificate_verify_failed: {
      value: cdktf.numberToHclTerraform(struct!.certificateVerifyFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    challenge_is_different: {
      value: cdktf.numberToHclTerraform(struct!.challengeIsDifferent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cipher_code_wrong_length: {
      value: cdktf.numberToHclTerraform(struct!.cipherCodeWrongLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cipher_or_hash_unavailable: {
      value: cdktf.numberToHclTerraform(struct!.cipherOrHashUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cipher_table_src_error: {
      value: cdktf.numberToHclTerraform(struct!.cipherTableSrcError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    clienthello_tlsext: {
      value: cdktf.numberToHclTerraform(struct!.clienthelloTlsext),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compressed_length_too_long: {
      value: cdktf.numberToHclTerraform(struct!.compressedLengthTooLong),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_failure: {
      value: cdktf.numberToHclTerraform(struct!.compressionFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_library_error: {
      value: cdktf.numberToHclTerraform(struct!.compressionLibraryError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connection_id_is_different: {
      value: cdktf.numberToHclTerraform(struct!.connectionIdIsDifferent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connection_type_not_set: {
      value: cdktf.numberToHclTerraform(struct!.connectionTypeNotSet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cookie_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.cookieMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_between_ccs_and_finished: {
      value: cdktf.numberToHclTerraform(struct!.dataBetweenCcsAndFinished),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_length_too_long: {
      value: cdktf.numberToHclTerraform(struct!.dataLengthTooLong),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    decryption_failed: {
      value: cdktf.numberToHclTerraform(struct!.decryptionFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    decryption_failed_or_bad_record_mac: {
      value: cdktf.numberToHclTerraform(struct!.decryptionFailedOrBadRecordMac),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dh_public_value_length_is_wrong: {
      value: cdktf.numberToHclTerraform(struct!.dhPublicValueLengthIsWrong),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    digest_check_failed: {
      value: cdktf.numberToHclTerraform(struct!.digestCheckFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    encrypted_length_too_long: {
      value: cdktf.numberToHclTerraform(struct!.encryptedLengthTooLong),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_generating_tmp_rsa_key: {
      value: cdktf.numberToHclTerraform(struct!.errorGeneratingTmpRsaKey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_in_received_cipher_list: {
      value: cdktf.numberToHclTerraform(struct!.errorInReceivedCipherList),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    excessive_message_size: {
      value: cdktf.numberToHclTerraform(struct!.excessiveMessageSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    extra_data_in_message: {
      value: cdktf.numberToHclTerraform(struct!.extraDataInMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    got_a_fin_before_a_ccs: {
      value: cdktf.numberToHclTerraform(struct!.gotAFinBeforeACcs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_request: {
      value: cdktf.numberToHclTerraform(struct!.httpRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    https_proxy_request: {
      value: cdktf.numberToHclTerraform(struct!.httpsProxyRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    illegal_padding: {
      value: cdktf.numberToHclTerraform(struct!.illegalPadding),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inappropriate_fallback: {
      value: cdktf.numberToHclTerraform(struct!.inappropriateFallback),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_challenge_length: {
      value: cdktf.numberToHclTerraform(struct!.invalidChallengeLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_command: {
      value: cdktf.numberToHclTerraform(struct!.invalidCommand),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_purpose: {
      value: cdktf.numberToHclTerraform(struct!.invalidPurpose),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_status_response: {
      value: cdktf.numberToHclTerraform(struct!.invalidStatusResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_trust: {
      value: cdktf.numberToHclTerraform(struct!.invalidTrust),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key_arg_too_long: {
      value: cdktf.numberToHclTerraform(struct!.keyArgTooLong),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    krb5: {
      value: cdktf.numberToHclTerraform(struct!.krb5),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    krb5_client_cc_principal: {
      value: cdktf.numberToHclTerraform(struct!.krb5ClientCcPrincipal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    krb5_client_get_cred: {
      value: cdktf.numberToHclTerraform(struct!.krb5ClientGetCred),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    krb5_client_init: {
      value: cdktf.numberToHclTerraform(struct!.krb5ClientInit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    krb5_client_mk_req: {
      value: cdktf.numberToHclTerraform(struct!.krb5ClientMkReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    krb5_server_bad_ticket: {
      value: cdktf.numberToHclTerraform(struct!.krb5ServerBadTicket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    krb5_server_init: {
      value: cdktf.numberToHclTerraform(struct!.krb5ServerInit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    krb5_server_rd_req: {
      value: cdktf.numberToHclTerraform(struct!.krb5ServerRdReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    krb5_server_tkt_expired: {
      value: cdktf.numberToHclTerraform(struct!.krb5ServerTktExpired),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    krb5_server_tkt_not_yet_valid: {
      value: cdktf.numberToHclTerraform(struct!.krb5ServerTktNotYetValid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    krb5_server_tkt_skew: {
      value: cdktf.numberToHclTerraform(struct!.krb5ServerTktSkew),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    length_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.lengthMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    length_too_short: {
      value: cdktf.numberToHclTerraform(struct!.lengthTooShort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    library_bug: {
      value: cdktf.numberToHclTerraform(struct!.libraryBug),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    library_has_no_ciphers: {
      value: cdktf.numberToHclTerraform(struct!.libraryHasNoCiphers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mast_key_too_long: {
      value: cdktf.numberToHclTerraform(struct!.mastKeyTooLong),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    message_too_long: {
      value: cdktf.numberToHclTerraform(struct!.messageTooLong),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    missing_dh_dsa_cert: {
      value: cdktf.numberToHclTerraform(struct!.missingDhDsaCert),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    missing_dh_key: {
      value: cdktf.numberToHclTerraform(struct!.missingDhKey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    missing_dh_rsa_cert: {
      value: cdktf.numberToHclTerraform(struct!.missingDhRsaCert),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    missing_dsa_signing_cert: {
      value: cdktf.numberToHclTerraform(struct!.missingDsaSigningCert),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    missing_export_tmp_dh_key: {
      value: cdktf.numberToHclTerraform(struct!.missingExportTmpDhKey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    missing_export_tmp_rsa_key: {
      value: cdktf.numberToHclTerraform(struct!.missingExportTmpRsaKey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    missing_rsa_certificate: {
      value: cdktf.numberToHclTerraform(struct!.missingRsaCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    missing_rsa_encrypting_cert: {
      value: cdktf.numberToHclTerraform(struct!.missingRsaEncryptingCert),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    missing_rsa_signing_cert: {
      value: cdktf.numberToHclTerraform(struct!.missingRsaSigningCert),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    missing_tmp_dh_key: {
      value: cdktf.numberToHclTerraform(struct!.missingTmpDhKey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    missing_tmp_rsa_key: {
      value: cdktf.numberToHclTerraform(struct!.missingTmpRsaKey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    missing_tmp_rsa_pkey: {
      value: cdktf.numberToHclTerraform(struct!.missingTmpRsaPkey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    missing_verify_message: {
      value: cdktf.numberToHclTerraform(struct!.missingVerifyMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multiple_sgc_restarts: {
      value: cdktf.numberToHclTerraform(struct!.multipleSgcRestarts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_certificate_assigned: {
      value: cdktf.numberToHclTerraform(struct!.noCertificateAssigned),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_certificate_returned: {
      value: cdktf.numberToHclTerraform(struct!.noCertificateReturned),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_certificate_set: {
      value: cdktf.numberToHclTerraform(struct!.noCertificateSet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_certificate_specified: {
      value: cdktf.numberToHclTerraform(struct!.noCertificateSpecified),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_certificates_returned: {
      value: cdktf.numberToHclTerraform(struct!.noCertificatesReturned),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_cipher_list: {
      value: cdktf.numberToHclTerraform(struct!.noCipherList),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_cipher_match: {
      value: cdktf.numberToHclTerraform(struct!.noCipherMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_ciphers_available: {
      value: cdktf.numberToHclTerraform(struct!.noCiphersAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_ciphers_passed: {
      value: cdktf.numberToHclTerraform(struct!.noCiphersPassed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_ciphers_specified: {
      value: cdktf.numberToHclTerraform(struct!.noCiphersSpecified),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_client_cert_received: {
      value: cdktf.numberToHclTerraform(struct!.noClientCertReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_compression_specified: {
      value: cdktf.numberToHclTerraform(struct!.noCompressionSpecified),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_method_specified: {
      value: cdktf.numberToHclTerraform(struct!.noMethodSpecified),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_private_key_assigned: {
      value: cdktf.numberToHclTerraform(struct!.noPrivateKeyAssigned),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_privatekey: {
      value: cdktf.numberToHclTerraform(struct!.noPrivatekey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_protocols_available: {
      value: cdktf.numberToHclTerraform(struct!.noProtocolsAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_publickey: {
      value: cdktf.numberToHclTerraform(struct!.noPublickey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_required_digest: {
      value: cdktf.numberToHclTerraform(struct!.noRequiredDigest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_shared_cipher: {
      value: cdktf.numberToHclTerraform(struct!.noSharedCipher),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_verify_callback: {
      value: cdktf.numberToHclTerraform(struct!.noVerifyCallback),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    non_sslv2_initial_packet: {
      value: cdktf.numberToHclTerraform(struct!.nonSslv2InitialPacket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    null_ssl_ctx: {
      value: cdktf.numberToHclTerraform(struct!.nullSslCtx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    null_ssl_method_passed: {
      value: cdktf.numberToHclTerraform(struct!.nullSslMethodPassed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    old_session_cipher_not_returned: {
      value: cdktf.numberToHclTerraform(struct!.oldSessionCipherNotReturned),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_length_too_long: {
      value: cdktf.numberToHclTerraform(struct!.packetLengthTooLong),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parse_tlsext: {
      value: cdktf.numberToHclTerraform(struct!.parseTlsext),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path_too_long: {
      value: cdktf.numberToHclTerraform(struct!.pathTooLong),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_did_not_return_a_certificate: {
      value: cdktf.numberToHclTerraform(struct!.peerDidNotReturnACertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_error: {
      value: cdktf.numberToHclTerraform(struct!.peerError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_error_certificate: {
      value: cdktf.numberToHclTerraform(struct!.peerErrorCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_error_no_certificate: {
      value: cdktf.numberToHclTerraform(struct!.peerErrorNoCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_error_no_cipher: {
      value: cdktf.numberToHclTerraform(struct!.peerErrorNoCipher),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_error_unsupported_certificate_type: {
      value: cdktf.numberToHclTerraform(struct!.peerErrorUnsupportedCertificateType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pre_mac_length_too_long: {
      value: cdktf.numberToHclTerraform(struct!.preMacLengthTooLong),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    problems_mapping_cipher_functions: {
      value: cdktf.numberToHclTerraform(struct!.problemsMappingCipherFunctions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol_is_shutdown: {
      value: cdktf.numberToHclTerraform(struct!.protocolIsShutdown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    public_key_encrypt_error: {
      value: cdktf.numberToHclTerraform(struct!.publicKeyEncryptError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    public_key_is_not_rsa: {
      value: cdktf.numberToHclTerraform(struct!.publicKeyIsNotRsa),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    public_key_not_rsa: {
      value: cdktf.numberToHclTerraform(struct!.publicKeyNotRsa),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_bio_not_set: {
      value: cdktf.numberToHclTerraform(struct!.readBioNotSet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_wrong_packet_type: {
      value: cdktf.numberToHclTerraform(struct!.readWrongPacketType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    record_length_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.recordLengthMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    record_too_large: {
      value: cdktf.numberToHclTerraform(struct!.recordTooLarge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    record_too_small: {
      value: cdktf.numberToHclTerraform(struct!.recordTooSmall),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    required_cipher_missing: {
      value: cdktf.numberToHclTerraform(struct!.requiredCipherMissing),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reuse_cert_length_not_zero: {
      value: cdktf.numberToHclTerraform(struct!.reuseCertLengthNotZero),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reuse_cert_type_not_zero: {
      value: cdktf.numberToHclTerraform(struct!.reuseCertTypeNotZero),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reuse_cipher_list_not_zero: {
      value: cdktf.numberToHclTerraform(struct!.reuseCipherListNotZero),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scsv_received_when_renegotiating: {
      value: cdktf.numberToHclTerraform(struct!.scsvReceivedWhenRenegotiating),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    serverhello_tlsext: {
      value: cdktf.numberToHclTerraform(struct!.serverhelloTlsext),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_id_context_uninitialized: {
      value: cdktf.numberToHclTerraform(struct!.sessionIdContextUninitialized),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    short_read: {
      value: cdktf.numberToHclTerraform(struct!.shortRead),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    signature_for_non_signing_certificate: {
      value: cdktf.numberToHclTerraform(struct!.signatureForNonSigningCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl23_doing_session_id_reuse: {
      value: cdktf.numberToHclTerraform(struct!.ssl23DoingSessionIdReuse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl2_connection_id_too_long: {
      value: cdktf.numberToHclTerraform(struct!.ssl2ConnectionIdTooLong),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl3_ext_invalid_servername: {
      value: cdktf.numberToHclTerraform(struct!.ssl3ExtInvalidServername),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl3_ext_invalid_servername_type: {
      value: cdktf.numberToHclTerraform(struct!.ssl3ExtInvalidServernameType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl3_session_id_too_long: {
      value: cdktf.numberToHclTerraform(struct!.ssl3SessionIdTooLong),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl3_session_id_too_short: {
      value: cdktf.numberToHclTerraform(struct!.ssl3SessionIdTooShort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_ctx_has_no_default_ssl_version: {
      value: cdktf.numberToHclTerraform(struct!.sslCtxHasNoDefaultSslVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_handshake_failure: {
      value: cdktf.numberToHclTerraform(struct!.sslHandshakeFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_library_has_no_ciphers: {
      value: cdktf.numberToHclTerraform(struct!.sslLibraryHasNoCiphers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_session_id_callback_failed: {
      value: cdktf.numberToHclTerraform(struct!.sslSessionIdCallbackFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_session_id_conflict: {
      value: cdktf.numberToHclTerraform(struct!.sslSessionIdConflict),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_session_id_context_too_long: {
      value: cdktf.numberToHclTerraform(struct!.sslSessionIdContextTooLong),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_session_id_has_bad_length: {
      value: cdktf.numberToHclTerraform(struct!.sslSessionIdHasBadLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_session_id_is_different: {
      value: cdktf.numberToHclTerraform(struct!.sslSessionIdIsDifferent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sslv3_alert_bad_certificate: {
      value: cdktf.numberToHclTerraform(struct!.sslv3AlertBadCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sslv3_alert_bad_record_mac: {
      value: cdktf.numberToHclTerraform(struct!.sslv3AlertBadRecordMac),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sslv3_alert_certificate_expired: {
      value: cdktf.numberToHclTerraform(struct!.sslv3AlertCertificateExpired),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sslv3_alert_certificate_revoked: {
      value: cdktf.numberToHclTerraform(struct!.sslv3AlertCertificateRevoked),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sslv3_alert_certificate_unknown: {
      value: cdktf.numberToHclTerraform(struct!.sslv3AlertCertificateUnknown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sslv3_alert_decompression_failure: {
      value: cdktf.numberToHclTerraform(struct!.sslv3AlertDecompressionFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sslv3_alert_handshake_failure: {
      value: cdktf.numberToHclTerraform(struct!.sslv3AlertHandshakeFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sslv3_alert_illegal_parameter: {
      value: cdktf.numberToHclTerraform(struct!.sslv3AlertIllegalParameter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sslv3_alert_no_certificate: {
      value: cdktf.numberToHclTerraform(struct!.sslv3AlertNoCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sslv3_alert_peer_error_cert: {
      value: cdktf.numberToHclTerraform(struct!.sslv3AlertPeerErrorCert),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sslv3_alert_peer_error_no_cert: {
      value: cdktf.numberToHclTerraform(struct!.sslv3AlertPeerErrorNoCert),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sslv3_alert_peer_error_no_cipher: {
      value: cdktf.numberToHclTerraform(struct!.sslv3AlertPeerErrorNoCipher),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sslv3_alert_peer_error_unsupp_cert_type: {
      value: cdktf.numberToHclTerraform(struct!.sslv3AlertPeerErrorUnsuppCertType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sslv3_alert_unexpected_msg: {
      value: cdktf.numberToHclTerraform(struct!.sslv3AlertUnexpectedMsg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sslv3_alert_unknown_remote_err_type: {
      value: cdktf.numberToHclTerraform(struct!.sslv3AlertUnknownRemoteErrType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sslv3_alert_unspported_cert: {
      value: cdktf.numberToHclTerraform(struct!.sslv3AlertUnspportedCert),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls_client_cert_req_with_anon_cipher: {
      value: cdktf.numberToHclTerraform(struct!.tlsClientCertReqWithAnonCipher),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls_invalid_ecpointformat_list: {
      value: cdktf.numberToHclTerraform(struct!.tlsInvalidEcpointformatList),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls_peer_did_not_respond_with_cert_list: {
      value: cdktf.numberToHclTerraform(struct!.tlsPeerDidNotRespondWithCertList),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls_rsa_encrypted_value_length_is_wrong: {
      value: cdktf.numberToHclTerraform(struct!.tlsRsaEncryptedValueLengthIsWrong),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tlsv1_alert_access_denied: {
      value: cdktf.numberToHclTerraform(struct!.tlsv1AlertAccessDenied),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tlsv1_alert_decode_error: {
      value: cdktf.numberToHclTerraform(struct!.tlsv1AlertDecodeError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tlsv1_alert_decrypt_error: {
      value: cdktf.numberToHclTerraform(struct!.tlsv1AlertDecryptError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tlsv1_alert_decryption_failed: {
      value: cdktf.numberToHclTerraform(struct!.tlsv1AlertDecryptionFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tlsv1_alert_export_restriction: {
      value: cdktf.numberToHclTerraform(struct!.tlsv1AlertExportRestriction),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tlsv1_alert_insufficient_security: {
      value: cdktf.numberToHclTerraform(struct!.tlsv1AlertInsufficientSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tlsv1_alert_internal_error: {
      value: cdktf.numberToHclTerraform(struct!.tlsv1AlertInternalError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tlsv1_alert_no_renegotiation: {
      value: cdktf.numberToHclTerraform(struct!.tlsv1AlertNoRenegotiation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tlsv1_alert_protocol_version: {
      value: cdktf.numberToHclTerraform(struct!.tlsv1AlertProtocolVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tlsv1_alert_record_overflow: {
      value: cdktf.numberToHclTerraform(struct!.tlsv1AlertRecordOverflow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tlsv1_alert_unknown_ca: {
      value: cdktf.numberToHclTerraform(struct!.tlsv1AlertUnknownCa),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tlsv1_alert_user_cancelled: {
      value: cdktf.numberToHclTerraform(struct!.tlsv1AlertUserCancelled),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tried_to_use_unsupported_cipher: {
      value: cdktf.numberToHclTerraform(struct!.triedToUseUnsupportedCipher),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unable_to_decode_dh_certs: {
      value: cdktf.numberToHclTerraform(struct!.unableToDecodeDhCerts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unable_to_extract_public_key: {
      value: cdktf.numberToHclTerraform(struct!.unableToExtractPublicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unable_to_find_dh_parameters: {
      value: cdktf.numberToHclTerraform(struct!.unableToFindDhParameters),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unable_to_find_public_key_parameters: {
      value: cdktf.numberToHclTerraform(struct!.unableToFindPublicKeyParameters),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unable_to_find_ssl_method: {
      value: cdktf.numberToHclTerraform(struct!.unableToFindSslMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unable_to_load_ssl2_md5_routines: {
      value: cdktf.numberToHclTerraform(struct!.unableToLoadSsl2Md5Routines),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unable_to_load_ssl3_md5_routines: {
      value: cdktf.numberToHclTerraform(struct!.unableToLoadSsl3Md5Routines),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unable_to_load_ssl3_sha1_routines: {
      value: cdktf.numberToHclTerraform(struct!.unableToLoadSsl3Sha1Routines),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unexpected_message: {
      value: cdktf.numberToHclTerraform(struct!.unexpectedMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unexpected_record: {
      value: cdktf.numberToHclTerraform(struct!.unexpectedRecord),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uninitialized: {
      value: cdktf.numberToHclTerraform(struct!.uninitialized),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unknown_alert_type: {
      value: cdktf.numberToHclTerraform(struct!.unknownAlertType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unknown_certificate_type: {
      value: cdktf.numberToHclTerraform(struct!.unknownCertificateType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unknown_cipher_returned: {
      value: cdktf.numberToHclTerraform(struct!.unknownCipherReturned),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unknown_cipher_type: {
      value: cdktf.numberToHclTerraform(struct!.unknownCipherType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unknown_key_exchange_type: {
      value: cdktf.numberToHclTerraform(struct!.unknownKeyExchangeType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unknown_pkey_type: {
      value: cdktf.numberToHclTerraform(struct!.unknownPkeyType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unknown_protocol: {
      value: cdktf.numberToHclTerraform(struct!.unknownProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unknown_remote_error_type: {
      value: cdktf.numberToHclTerraform(struct!.unknownRemoteErrorType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unknown_ssl_version: {
      value: cdktf.numberToHclTerraform(struct!.unknownSslVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unknown_state: {
      value: cdktf.numberToHclTerraform(struct!.unknownState),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unsupported_cipher: {
      value: cdktf.numberToHclTerraform(struct!.unsupportedCipher),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unsupported_compression_algorithm: {
      value: cdktf.numberToHclTerraform(struct!.unsupportedCompressionAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unsupported_digest_type: {
      value: cdktf.numberToHclTerraform(struct!.unsupportedDigestType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unsupported_elliptic_curve: {
      value: cdktf.numberToHclTerraform(struct!.unsupportedEllipticCurve),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unsupported_option: {
      value: cdktf.numberToHclTerraform(struct!.unsupportedOption),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unsupported_protocol: {
      value: cdktf.numberToHclTerraform(struct!.unsupportedProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unsupported_ssl_version: {
      value: cdktf.numberToHclTerraform(struct!.unsupportedSslVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unsupported_status_type: {
      value: cdktf.numberToHclTerraform(struct!.unsupportedStatusType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    write_bio_not_set: {
      value: cdktf.numberToHclTerraform(struct!.writeBioNotSet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wrong_cipher_returned: {
      value: cdktf.numberToHclTerraform(struct!.wrongCipherReturned),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wrong_message_type: {
      value: cdktf.numberToHclTerraform(struct!.wrongMessageType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wrong_number_of_key_bits: {
      value: cdktf.numberToHclTerraform(struct!.wrongNumberOfKeyBits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wrong_signature_length: {
      value: cdktf.numberToHclTerraform(struct!.wrongSignatureLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wrong_signature_size: {
      value: cdktf.numberToHclTerraform(struct!.wrongSignatureSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wrong_ssl_version: {
      value: cdktf.numberToHclTerraform(struct!.wrongSslVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wrong_version_number: {
      value: cdktf.numberToHclTerraform(struct!.wrongVersionNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    x509_lib: {
      value: cdktf.numberToHclTerraform(struct!.x509Lib),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    x509_verification_setup_problems: {
      value: cdktf.numberToHclTerraform(struct!.x509VerificationSetupProblems),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbSslErrorOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbSslErrorOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appDataInHandshake !== undefined) {
      hasAnyValues = true;
      internalValueResult.appDataInHandshake = this._appDataInHandshake;
    }
    if (this._attemptToReuseSessInDiffContext !== undefined) {
      hasAnyValues = true;
      internalValueResult.attemptToReuseSessInDiffContext = this._attemptToReuseSessInDiffContext;
    }
    if (this._badAlertRecord !== undefined) {
      hasAnyValues = true;
      internalValueResult.badAlertRecord = this._badAlertRecord;
    }
    if (this._badAuthenticationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.badAuthenticationType = this._badAuthenticationType;
    }
    if (this._badChangeCipherSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.badChangeCipherSpec = this._badChangeCipherSpec;
    }
    if (this._badChecksum !== undefined) {
      hasAnyValues = true;
      internalValueResult.badChecksum = this._badChecksum;
    }
    if (this._badDataReturnedByCallback !== undefined) {
      hasAnyValues = true;
      internalValueResult.badDataReturnedByCallback = this._badDataReturnedByCallback;
    }
    if (this._badDecompression !== undefined) {
      hasAnyValues = true;
      internalValueResult.badDecompression = this._badDecompression;
    }
    if (this._badDhGLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.badDhGLength = this._badDhGLength;
    }
    if (this._badDhPLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.badDhPLength = this._badDhPLength;
    }
    if (this._badDhPubKeyLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.badDhPubKeyLength = this._badDhPubKeyLength;
    }
    if (this._badDigestLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.badDigestLength = this._badDigestLength;
    }
    if (this._badDsaSignature !== undefined) {
      hasAnyValues = true;
      internalValueResult.badDsaSignature = this._badDsaSignature;
    }
    if (this._badEccCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.badEccCert = this._badEccCert;
    }
    if (this._badEcdsaSig !== undefined) {
      hasAnyValues = true;
      internalValueResult.badEcdsaSig = this._badEcdsaSig;
    }
    if (this._badEcpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.badEcpoint = this._badEcpoint;
    }
    if (this._badHandshakeLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.badHandshakeLength = this._badHandshakeLength;
    }
    if (this._badHelloRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.badHelloRequest = this._badHelloRequest;
    }
    if (this._badLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.badLength = this._badLength;
    }
    if (this._badMacDecode !== undefined) {
      hasAnyValues = true;
      internalValueResult.badMacDecode = this._badMacDecode;
    }
    if (this._badMessageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.badMessageType = this._badMessageType;
    }
    if (this._badPacketLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.badPacketLength = this._badPacketLength;
    }
    if (this._badProtocolVersionNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.badProtocolVersionNumber = this._badProtocolVersionNumber;
    }
    if (this._badResponseArgument !== undefined) {
      hasAnyValues = true;
      internalValueResult.badResponseArgument = this._badResponseArgument;
    }
    if (this._badRsaDecrypt !== undefined) {
      hasAnyValues = true;
      internalValueResult.badRsaDecrypt = this._badRsaDecrypt;
    }
    if (this._badRsaELength !== undefined) {
      hasAnyValues = true;
      internalValueResult.badRsaELength = this._badRsaELength;
    }
    if (this._badRsaEncrypt !== undefined) {
      hasAnyValues = true;
      internalValueResult.badRsaEncrypt = this._badRsaEncrypt;
    }
    if (this._badRsaModulusLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.badRsaModulusLength = this._badRsaModulusLength;
    }
    if (this._badRsaSignature !== undefined) {
      hasAnyValues = true;
      internalValueResult.badRsaSignature = this._badRsaSignature;
    }
    if (this._badSignature !== undefined) {
      hasAnyValues = true;
      internalValueResult.badSignature = this._badSignature;
    }
    if (this._badSslFiletype !== undefined) {
      hasAnyValues = true;
      internalValueResult.badSslFiletype = this._badSslFiletype;
    }
    if (this._badSslSessionIdLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.badSslSessionIdLength = this._badSslSessionIdLength;
    }
    if (this._badState !== undefined) {
      hasAnyValues = true;
      internalValueResult.badState = this._badState;
    }
    if (this._badWriteRetry !== undefined) {
      hasAnyValues = true;
      internalValueResult.badWriteRetry = this._badWriteRetry;
    }
    if (this._bioNotSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.bioNotSet = this._bioNotSet;
    }
    if (this._blockCipherPadIsWrong !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockCipherPadIsWrong = this._blockCipherPadIsWrong;
    }
    if (this._bnLib !== undefined) {
      hasAnyValues = true;
      internalValueResult.bnLib = this._bnLib;
    }
    if (this._caDnLengthMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.caDnLengthMismatch = this._caDnLengthMismatch;
    }
    if (this._caDnTooLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.caDnTooLong = this._caDnTooLong;
    }
    if (this._ccsReceivedEarly !== undefined) {
      hasAnyValues = true;
      internalValueResult.ccsReceivedEarly = this._ccsReceivedEarly;
    }
    if (this._certLengthMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.certLengthMismatch = this._certLengthMismatch;
    }
    if (this._certificateVerifyFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateVerifyFailed = this._certificateVerifyFailed;
    }
    if (this._challengeIsDifferent !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengeIsDifferent = this._challengeIsDifferent;
    }
    if (this._cipherCodeWrongLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherCodeWrongLength = this._cipherCodeWrongLength;
    }
    if (this._cipherOrHashUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherOrHashUnavailable = this._cipherOrHashUnavailable;
    }
    if (this._cipherTableSrcError !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherTableSrcError = this._cipherTableSrcError;
    }
    if (this._clienthelloTlsext !== undefined) {
      hasAnyValues = true;
      internalValueResult.clienthelloTlsext = this._clienthelloTlsext;
    }
    if (this._compressedLengthTooLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressedLengthTooLong = this._compressedLengthTooLong;
    }
    if (this._compressionFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionFailure = this._compressionFailure;
    }
    if (this._compressionLibraryError !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionLibraryError = this._compressionLibraryError;
    }
    if (this._connectionIdIsDifferent !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionIdIsDifferent = this._connectionIdIsDifferent;
    }
    if (this._connectionTypeNotSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionTypeNotSet = this._connectionTypeNotSet;
    }
    if (this._cookieMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieMismatch = this._cookieMismatch;
    }
    if (this._dataBetweenCcsAndFinished !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataBetweenCcsAndFinished = this._dataBetweenCcsAndFinished;
    }
    if (this._dataLengthTooLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLengthTooLong = this._dataLengthTooLong;
    }
    if (this._decryptionFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionFailed = this._decryptionFailed;
    }
    if (this._decryptionFailedOrBadRecordMac !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionFailedOrBadRecordMac = this._decryptionFailedOrBadRecordMac;
    }
    if (this._dhPublicValueLengthIsWrong !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhPublicValueLengthIsWrong = this._dhPublicValueLengthIsWrong;
    }
    if (this._digestCheckFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.digestCheckFailed = this._digestCheckFailed;
    }
    if (this._encryptedLengthTooLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptedLengthTooLong = this._encryptedLengthTooLong;
    }
    if (this._errorGeneratingTmpRsaKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorGeneratingTmpRsaKey = this._errorGeneratingTmpRsaKey;
    }
    if (this._errorInReceivedCipherList !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorInReceivedCipherList = this._errorInReceivedCipherList;
    }
    if (this._excessiveMessageSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.excessiveMessageSize = this._excessiveMessageSize;
    }
    if (this._extraDataInMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraDataInMessage = this._extraDataInMessage;
    }
    if (this._gotAFinBeforeACcs !== undefined) {
      hasAnyValues = true;
      internalValueResult.gotAFinBeforeACcs = this._gotAFinBeforeACcs;
    }
    if (this._httpRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRequest = this._httpRequest;
    }
    if (this._httpsProxyRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsProxyRequest = this._httpsProxyRequest;
    }
    if (this._illegalPadding !== undefined) {
      hasAnyValues = true;
      internalValueResult.illegalPadding = this._illegalPadding;
    }
    if (this._inappropriateFallback !== undefined) {
      hasAnyValues = true;
      internalValueResult.inappropriateFallback = this._inappropriateFallback;
    }
    if (this._invalidChallengeLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidChallengeLength = this._invalidChallengeLength;
    }
    if (this._invalidCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidCommand = this._invalidCommand;
    }
    if (this._invalidPurpose !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidPurpose = this._invalidPurpose;
    }
    if (this._invalidStatusResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidStatusResponse = this._invalidStatusResponse;
    }
    if (this._invalidTrust !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidTrust = this._invalidTrust;
    }
    if (this._keyArgTooLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyArgTooLong = this._keyArgTooLong;
    }
    if (this._krb5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.krb5 = this._krb5;
    }
    if (this._krb5ClientCcPrincipal !== undefined) {
      hasAnyValues = true;
      internalValueResult.krb5ClientCcPrincipal = this._krb5ClientCcPrincipal;
    }
    if (this._krb5ClientGetCred !== undefined) {
      hasAnyValues = true;
      internalValueResult.krb5ClientGetCred = this._krb5ClientGetCred;
    }
    if (this._krb5ClientInit !== undefined) {
      hasAnyValues = true;
      internalValueResult.krb5ClientInit = this._krb5ClientInit;
    }
    if (this._krb5ClientMkReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.krb5ClientMkReq = this._krb5ClientMkReq;
    }
    if (this._krb5ServerBadTicket !== undefined) {
      hasAnyValues = true;
      internalValueResult.krb5ServerBadTicket = this._krb5ServerBadTicket;
    }
    if (this._krb5ServerInit !== undefined) {
      hasAnyValues = true;
      internalValueResult.krb5ServerInit = this._krb5ServerInit;
    }
    if (this._krb5ServerRdReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.krb5ServerRdReq = this._krb5ServerRdReq;
    }
    if (this._krb5ServerTktExpired !== undefined) {
      hasAnyValues = true;
      internalValueResult.krb5ServerTktExpired = this._krb5ServerTktExpired;
    }
    if (this._krb5ServerTktNotYetValid !== undefined) {
      hasAnyValues = true;
      internalValueResult.krb5ServerTktNotYetValid = this._krb5ServerTktNotYetValid;
    }
    if (this._krb5ServerTktSkew !== undefined) {
      hasAnyValues = true;
      internalValueResult.krb5ServerTktSkew = this._krb5ServerTktSkew;
    }
    if (this._lengthMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.lengthMismatch = this._lengthMismatch;
    }
    if (this._lengthTooShort !== undefined) {
      hasAnyValues = true;
      internalValueResult.lengthTooShort = this._lengthTooShort;
    }
    if (this._libraryBug !== undefined) {
      hasAnyValues = true;
      internalValueResult.libraryBug = this._libraryBug;
    }
    if (this._libraryHasNoCiphers !== undefined) {
      hasAnyValues = true;
      internalValueResult.libraryHasNoCiphers = this._libraryHasNoCiphers;
    }
    if (this._mastKeyTooLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.mastKeyTooLong = this._mastKeyTooLong;
    }
    if (this._messageTooLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageTooLong = this._messageTooLong;
    }
    if (this._missingDhDsaCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.missingDhDsaCert = this._missingDhDsaCert;
    }
    if (this._missingDhKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.missingDhKey = this._missingDhKey;
    }
    if (this._missingDhRsaCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.missingDhRsaCert = this._missingDhRsaCert;
    }
    if (this._missingDsaSigningCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.missingDsaSigningCert = this._missingDsaSigningCert;
    }
    if (this._missingExportTmpDhKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.missingExportTmpDhKey = this._missingExportTmpDhKey;
    }
    if (this._missingExportTmpRsaKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.missingExportTmpRsaKey = this._missingExportTmpRsaKey;
    }
    if (this._missingRsaCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.missingRsaCertificate = this._missingRsaCertificate;
    }
    if (this._missingRsaEncryptingCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.missingRsaEncryptingCert = this._missingRsaEncryptingCert;
    }
    if (this._missingRsaSigningCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.missingRsaSigningCert = this._missingRsaSigningCert;
    }
    if (this._missingTmpDhKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.missingTmpDhKey = this._missingTmpDhKey;
    }
    if (this._missingTmpRsaKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.missingTmpRsaKey = this._missingTmpRsaKey;
    }
    if (this._missingTmpRsaPkey !== undefined) {
      hasAnyValues = true;
      internalValueResult.missingTmpRsaPkey = this._missingTmpRsaPkey;
    }
    if (this._missingVerifyMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.missingVerifyMessage = this._missingVerifyMessage;
    }
    if (this._multipleSgcRestarts !== undefined) {
      hasAnyValues = true;
      internalValueResult.multipleSgcRestarts = this._multipleSgcRestarts;
    }
    if (this._noCertificateAssigned !== undefined) {
      hasAnyValues = true;
      internalValueResult.noCertificateAssigned = this._noCertificateAssigned;
    }
    if (this._noCertificateReturned !== undefined) {
      hasAnyValues = true;
      internalValueResult.noCertificateReturned = this._noCertificateReturned;
    }
    if (this._noCertificateSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.noCertificateSet = this._noCertificateSet;
    }
    if (this._noCertificateSpecified !== undefined) {
      hasAnyValues = true;
      internalValueResult.noCertificateSpecified = this._noCertificateSpecified;
    }
    if (this._noCertificatesReturned !== undefined) {
      hasAnyValues = true;
      internalValueResult.noCertificatesReturned = this._noCertificatesReturned;
    }
    if (this._noCipherList !== undefined) {
      hasAnyValues = true;
      internalValueResult.noCipherList = this._noCipherList;
    }
    if (this._noCipherMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.noCipherMatch = this._noCipherMatch;
    }
    if (this._noCiphersAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.noCiphersAvailable = this._noCiphersAvailable;
    }
    if (this._noCiphersPassed !== undefined) {
      hasAnyValues = true;
      internalValueResult.noCiphersPassed = this._noCiphersPassed;
    }
    if (this._noCiphersSpecified !== undefined) {
      hasAnyValues = true;
      internalValueResult.noCiphersSpecified = this._noCiphersSpecified;
    }
    if (this._noClientCertReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.noClientCertReceived = this._noClientCertReceived;
    }
    if (this._noCompressionSpecified !== undefined) {
      hasAnyValues = true;
      internalValueResult.noCompressionSpecified = this._noCompressionSpecified;
    }
    if (this._noMethodSpecified !== undefined) {
      hasAnyValues = true;
      internalValueResult.noMethodSpecified = this._noMethodSpecified;
    }
    if (this._noPrivateKeyAssigned !== undefined) {
      hasAnyValues = true;
      internalValueResult.noPrivateKeyAssigned = this._noPrivateKeyAssigned;
    }
    if (this._noPrivatekey !== undefined) {
      hasAnyValues = true;
      internalValueResult.noPrivatekey = this._noPrivatekey;
    }
    if (this._noProtocolsAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.noProtocolsAvailable = this._noProtocolsAvailable;
    }
    if (this._noPublickey !== undefined) {
      hasAnyValues = true;
      internalValueResult.noPublickey = this._noPublickey;
    }
    if (this._noRequiredDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.noRequiredDigest = this._noRequiredDigest;
    }
    if (this._noSharedCipher !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSharedCipher = this._noSharedCipher;
    }
    if (this._noVerifyCallback !== undefined) {
      hasAnyValues = true;
      internalValueResult.noVerifyCallback = this._noVerifyCallback;
    }
    if (this._nonSslv2InitialPacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonSslv2InitialPacket = this._nonSslv2InitialPacket;
    }
    if (this._nullSslCtx !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullSslCtx = this._nullSslCtx;
    }
    if (this._nullSslMethodPassed !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullSslMethodPassed = this._nullSslMethodPassed;
    }
    if (this._oldSessionCipherNotReturned !== undefined) {
      hasAnyValues = true;
      internalValueResult.oldSessionCipherNotReturned = this._oldSessionCipherNotReturned;
    }
    if (this._packetLengthTooLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetLengthTooLong = this._packetLengthTooLong;
    }
    if (this._parseTlsext !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseTlsext = this._parseTlsext;
    }
    if (this._pathTooLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathTooLong = this._pathTooLong;
    }
    if (this._peerDidNotReturnACertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerDidNotReturnACertificate = this._peerDidNotReturnACertificate;
    }
    if (this._peerError !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerError = this._peerError;
    }
    if (this._peerErrorCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerErrorCertificate = this._peerErrorCertificate;
    }
    if (this._peerErrorNoCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerErrorNoCertificate = this._peerErrorNoCertificate;
    }
    if (this._peerErrorNoCipher !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerErrorNoCipher = this._peerErrorNoCipher;
    }
    if (this._peerErrorUnsupportedCertificateType !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerErrorUnsupportedCertificateType = this._peerErrorUnsupportedCertificateType;
    }
    if (this._preMacLengthTooLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.preMacLengthTooLong = this._preMacLengthTooLong;
    }
    if (this._problemsMappingCipherFunctions !== undefined) {
      hasAnyValues = true;
      internalValueResult.problemsMappingCipherFunctions = this._problemsMappingCipherFunctions;
    }
    if (this._protocolIsShutdown !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolIsShutdown = this._protocolIsShutdown;
    }
    if (this._publicKeyEncryptError !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKeyEncryptError = this._publicKeyEncryptError;
    }
    if (this._publicKeyIsNotRsa !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKeyIsNotRsa = this._publicKeyIsNotRsa;
    }
    if (this._publicKeyNotRsa !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKeyNotRsa = this._publicKeyNotRsa;
    }
    if (this._readBioNotSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.readBioNotSet = this._readBioNotSet;
    }
    if (this._readWrongPacketType !== undefined) {
      hasAnyValues = true;
      internalValueResult.readWrongPacketType = this._readWrongPacketType;
    }
    if (this._recordLengthMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordLengthMismatch = this._recordLengthMismatch;
    }
    if (this._recordTooLarge !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordTooLarge = this._recordTooLarge;
    }
    if (this._recordTooSmall !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordTooSmall = this._recordTooSmall;
    }
    if (this._requiredCipherMissing !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredCipherMissing = this._requiredCipherMissing;
    }
    if (this._reuseCertLengthNotZero !== undefined) {
      hasAnyValues = true;
      internalValueResult.reuseCertLengthNotZero = this._reuseCertLengthNotZero;
    }
    if (this._reuseCertTypeNotZero !== undefined) {
      hasAnyValues = true;
      internalValueResult.reuseCertTypeNotZero = this._reuseCertTypeNotZero;
    }
    if (this._reuseCipherListNotZero !== undefined) {
      hasAnyValues = true;
      internalValueResult.reuseCipherListNotZero = this._reuseCipherListNotZero;
    }
    if (this._scsvReceivedWhenRenegotiating !== undefined) {
      hasAnyValues = true;
      internalValueResult.scsvReceivedWhenRenegotiating = this._scsvReceivedWhenRenegotiating;
    }
    if (this._serverhelloTlsext !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverhelloTlsext = this._serverhelloTlsext;
    }
    if (this._sessionIdContextUninitialized !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionIdContextUninitialized = this._sessionIdContextUninitialized;
    }
    if (this._shortRead !== undefined) {
      hasAnyValues = true;
      internalValueResult.shortRead = this._shortRead;
    }
    if (this._signatureForNonSigningCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureForNonSigningCertificate = this._signatureForNonSigningCertificate;
    }
    if (this._ssl23DoingSessionIdReuse !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl23DoingSessionIdReuse = this._ssl23DoingSessionIdReuse;
    }
    if (this._ssl2ConnectionIdTooLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl2ConnectionIdTooLong = this._ssl2ConnectionIdTooLong;
    }
    if (this._ssl3ExtInvalidServername !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl3ExtInvalidServername = this._ssl3ExtInvalidServername;
    }
    if (this._ssl3ExtInvalidServernameType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl3ExtInvalidServernameType = this._ssl3ExtInvalidServernameType;
    }
    if (this._ssl3SessionIdTooLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl3SessionIdTooLong = this._ssl3SessionIdTooLong;
    }
    if (this._ssl3SessionIdTooShort !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl3SessionIdTooShort = this._ssl3SessionIdTooShort;
    }
    if (this._sslCtxHasNoDefaultSslVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCtxHasNoDefaultSslVersion = this._sslCtxHasNoDefaultSslVersion;
    }
    if (this._sslHandshakeFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslHandshakeFailure = this._sslHandshakeFailure;
    }
    if (this._sslLibraryHasNoCiphers !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslLibraryHasNoCiphers = this._sslLibraryHasNoCiphers;
    }
    if (this._sslSessionIdCallbackFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslSessionIdCallbackFailed = this._sslSessionIdCallbackFailed;
    }
    if (this._sslSessionIdConflict !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslSessionIdConflict = this._sslSessionIdConflict;
    }
    if (this._sslSessionIdContextTooLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslSessionIdContextTooLong = this._sslSessionIdContextTooLong;
    }
    if (this._sslSessionIdHasBadLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslSessionIdHasBadLength = this._sslSessionIdHasBadLength;
    }
    if (this._sslSessionIdIsDifferent !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslSessionIdIsDifferent = this._sslSessionIdIsDifferent;
    }
    if (this._sslv3AlertBadCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslv3AlertBadCertificate = this._sslv3AlertBadCertificate;
    }
    if (this._sslv3AlertBadRecordMac !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslv3AlertBadRecordMac = this._sslv3AlertBadRecordMac;
    }
    if (this._sslv3AlertCertificateExpired !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslv3AlertCertificateExpired = this._sslv3AlertCertificateExpired;
    }
    if (this._sslv3AlertCertificateRevoked !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslv3AlertCertificateRevoked = this._sslv3AlertCertificateRevoked;
    }
    if (this._sslv3AlertCertificateUnknown !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslv3AlertCertificateUnknown = this._sslv3AlertCertificateUnknown;
    }
    if (this._sslv3AlertDecompressionFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslv3AlertDecompressionFailure = this._sslv3AlertDecompressionFailure;
    }
    if (this._sslv3AlertHandshakeFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslv3AlertHandshakeFailure = this._sslv3AlertHandshakeFailure;
    }
    if (this._sslv3AlertIllegalParameter !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslv3AlertIllegalParameter = this._sslv3AlertIllegalParameter;
    }
    if (this._sslv3AlertNoCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslv3AlertNoCertificate = this._sslv3AlertNoCertificate;
    }
    if (this._sslv3AlertPeerErrorCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslv3AlertPeerErrorCert = this._sslv3AlertPeerErrorCert;
    }
    if (this._sslv3AlertPeerErrorNoCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslv3AlertPeerErrorNoCert = this._sslv3AlertPeerErrorNoCert;
    }
    if (this._sslv3AlertPeerErrorNoCipher !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslv3AlertPeerErrorNoCipher = this._sslv3AlertPeerErrorNoCipher;
    }
    if (this._sslv3AlertPeerErrorUnsuppCertType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslv3AlertPeerErrorUnsuppCertType = this._sslv3AlertPeerErrorUnsuppCertType;
    }
    if (this._sslv3AlertUnexpectedMsg !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslv3AlertUnexpectedMsg = this._sslv3AlertUnexpectedMsg;
    }
    if (this._sslv3AlertUnknownRemoteErrType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslv3AlertUnknownRemoteErrType = this._sslv3AlertUnknownRemoteErrType;
    }
    if (this._sslv3AlertUnspportedCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslv3AlertUnspportedCert = this._sslv3AlertUnspportedCert;
    }
    if (this._tlsClientCertReqWithAnonCipher !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsClientCertReqWithAnonCipher = this._tlsClientCertReqWithAnonCipher;
    }
    if (this._tlsInvalidEcpointformatList !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsInvalidEcpointformatList = this._tlsInvalidEcpointformatList;
    }
    if (this._tlsPeerDidNotRespondWithCertList !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsPeerDidNotRespondWithCertList = this._tlsPeerDidNotRespondWithCertList;
    }
    if (this._tlsRsaEncryptedValueLengthIsWrong !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsRsaEncryptedValueLengthIsWrong = this._tlsRsaEncryptedValueLengthIsWrong;
    }
    if (this._tlsv1AlertAccessDenied !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsv1AlertAccessDenied = this._tlsv1AlertAccessDenied;
    }
    if (this._tlsv1AlertDecodeError !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsv1AlertDecodeError = this._tlsv1AlertDecodeError;
    }
    if (this._tlsv1AlertDecryptError !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsv1AlertDecryptError = this._tlsv1AlertDecryptError;
    }
    if (this._tlsv1AlertDecryptionFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsv1AlertDecryptionFailed = this._tlsv1AlertDecryptionFailed;
    }
    if (this._tlsv1AlertExportRestriction !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsv1AlertExportRestriction = this._tlsv1AlertExportRestriction;
    }
    if (this._tlsv1AlertInsufficientSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsv1AlertInsufficientSecurity = this._tlsv1AlertInsufficientSecurity;
    }
    if (this._tlsv1AlertInternalError !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsv1AlertInternalError = this._tlsv1AlertInternalError;
    }
    if (this._tlsv1AlertNoRenegotiation !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsv1AlertNoRenegotiation = this._tlsv1AlertNoRenegotiation;
    }
    if (this._tlsv1AlertProtocolVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsv1AlertProtocolVersion = this._tlsv1AlertProtocolVersion;
    }
    if (this._tlsv1AlertRecordOverflow !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsv1AlertRecordOverflow = this._tlsv1AlertRecordOverflow;
    }
    if (this._tlsv1AlertUnknownCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsv1AlertUnknownCa = this._tlsv1AlertUnknownCa;
    }
    if (this._tlsv1AlertUserCancelled !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsv1AlertUserCancelled = this._tlsv1AlertUserCancelled;
    }
    if (this._triedToUseUnsupportedCipher !== undefined) {
      hasAnyValues = true;
      internalValueResult.triedToUseUnsupportedCipher = this._triedToUseUnsupportedCipher;
    }
    if (this._unableToDecodeDhCerts !== undefined) {
      hasAnyValues = true;
      internalValueResult.unableToDecodeDhCerts = this._unableToDecodeDhCerts;
    }
    if (this._unableToExtractPublicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.unableToExtractPublicKey = this._unableToExtractPublicKey;
    }
    if (this._unableToFindDhParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.unableToFindDhParameters = this._unableToFindDhParameters;
    }
    if (this._unableToFindPublicKeyParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.unableToFindPublicKeyParameters = this._unableToFindPublicKeyParameters;
    }
    if (this._unableToFindSslMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.unableToFindSslMethod = this._unableToFindSslMethod;
    }
    if (this._unableToLoadSsl2Md5Routines !== undefined) {
      hasAnyValues = true;
      internalValueResult.unableToLoadSsl2Md5Routines = this._unableToLoadSsl2Md5Routines;
    }
    if (this._unableToLoadSsl3Md5Routines !== undefined) {
      hasAnyValues = true;
      internalValueResult.unableToLoadSsl3Md5Routines = this._unableToLoadSsl3Md5Routines;
    }
    if (this._unableToLoadSsl3Sha1Routines !== undefined) {
      hasAnyValues = true;
      internalValueResult.unableToLoadSsl3Sha1Routines = this._unableToLoadSsl3Sha1Routines;
    }
    if (this._unexpectedMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.unexpectedMessage = this._unexpectedMessage;
    }
    if (this._unexpectedRecord !== undefined) {
      hasAnyValues = true;
      internalValueResult.unexpectedRecord = this._unexpectedRecord;
    }
    if (this._uninitialized !== undefined) {
      hasAnyValues = true;
      internalValueResult.uninitialized = this._uninitialized;
    }
    if (this._unknownAlertType !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownAlertType = this._unknownAlertType;
    }
    if (this._unknownCertificateType !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownCertificateType = this._unknownCertificateType;
    }
    if (this._unknownCipherReturned !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownCipherReturned = this._unknownCipherReturned;
    }
    if (this._unknownCipherType !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownCipherType = this._unknownCipherType;
    }
    if (this._unknownKeyExchangeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownKeyExchangeType = this._unknownKeyExchangeType;
    }
    if (this._unknownPkeyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownPkeyType = this._unknownPkeyType;
    }
    if (this._unknownProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownProtocol = this._unknownProtocol;
    }
    if (this._unknownRemoteErrorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownRemoteErrorType = this._unknownRemoteErrorType;
    }
    if (this._unknownSslVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownSslVersion = this._unknownSslVersion;
    }
    if (this._unknownState !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownState = this._unknownState;
    }
    if (this._unsupportedCipher !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedCipher = this._unsupportedCipher;
    }
    if (this._unsupportedCompressionAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedCompressionAlgorithm = this._unsupportedCompressionAlgorithm;
    }
    if (this._unsupportedDigestType !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedDigestType = this._unsupportedDigestType;
    }
    if (this._unsupportedEllipticCurve !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedEllipticCurve = this._unsupportedEllipticCurve;
    }
    if (this._unsupportedOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedOption = this._unsupportedOption;
    }
    if (this._unsupportedProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedProtocol = this._unsupportedProtocol;
    }
    if (this._unsupportedSslVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedSslVersion = this._unsupportedSslVersion;
    }
    if (this._unsupportedStatusType !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedStatusType = this._unsupportedStatusType;
    }
    if (this._writeBioNotSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeBioNotSet = this._writeBioNotSet;
    }
    if (this._wrongCipherReturned !== undefined) {
      hasAnyValues = true;
      internalValueResult.wrongCipherReturned = this._wrongCipherReturned;
    }
    if (this._wrongMessageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.wrongMessageType = this._wrongMessageType;
    }
    if (this._wrongNumberOfKeyBits !== undefined) {
      hasAnyValues = true;
      internalValueResult.wrongNumberOfKeyBits = this._wrongNumberOfKeyBits;
    }
    if (this._wrongSignatureLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.wrongSignatureLength = this._wrongSignatureLength;
    }
    if (this._wrongSignatureSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.wrongSignatureSize = this._wrongSignatureSize;
    }
    if (this._wrongSslVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.wrongSslVersion = this._wrongSslVersion;
    }
    if (this._wrongVersionNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.wrongVersionNumber = this._wrongVersionNumber;
    }
    if (this._x509Lib !== undefined) {
      hasAnyValues = true;
      internalValueResult.x509Lib = this._x509Lib;
    }
    if (this._x509VerificationSetupProblems !== undefined) {
      hasAnyValues = true;
      internalValueResult.x509VerificationSetupProblems = this._x509VerificationSetupProblems;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbSslErrorOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appDataInHandshake = undefined;
      this._attemptToReuseSessInDiffContext = undefined;
      this._badAlertRecord = undefined;
      this._badAuthenticationType = undefined;
      this._badChangeCipherSpec = undefined;
      this._badChecksum = undefined;
      this._badDataReturnedByCallback = undefined;
      this._badDecompression = undefined;
      this._badDhGLength = undefined;
      this._badDhPLength = undefined;
      this._badDhPubKeyLength = undefined;
      this._badDigestLength = undefined;
      this._badDsaSignature = undefined;
      this._badEccCert = undefined;
      this._badEcdsaSig = undefined;
      this._badEcpoint = undefined;
      this._badHandshakeLength = undefined;
      this._badHelloRequest = undefined;
      this._badLength = undefined;
      this._badMacDecode = undefined;
      this._badMessageType = undefined;
      this._badPacketLength = undefined;
      this._badProtocolVersionNumber = undefined;
      this._badResponseArgument = undefined;
      this._badRsaDecrypt = undefined;
      this._badRsaELength = undefined;
      this._badRsaEncrypt = undefined;
      this._badRsaModulusLength = undefined;
      this._badRsaSignature = undefined;
      this._badSignature = undefined;
      this._badSslFiletype = undefined;
      this._badSslSessionIdLength = undefined;
      this._badState = undefined;
      this._badWriteRetry = undefined;
      this._bioNotSet = undefined;
      this._blockCipherPadIsWrong = undefined;
      this._bnLib = undefined;
      this._caDnLengthMismatch = undefined;
      this._caDnTooLong = undefined;
      this._ccsReceivedEarly = undefined;
      this._certLengthMismatch = undefined;
      this._certificateVerifyFailed = undefined;
      this._challengeIsDifferent = undefined;
      this._cipherCodeWrongLength = undefined;
      this._cipherOrHashUnavailable = undefined;
      this._cipherTableSrcError = undefined;
      this._clienthelloTlsext = undefined;
      this._compressedLengthTooLong = undefined;
      this._compressionFailure = undefined;
      this._compressionLibraryError = undefined;
      this._connectionIdIsDifferent = undefined;
      this._connectionTypeNotSet = undefined;
      this._cookieMismatch = undefined;
      this._dataBetweenCcsAndFinished = undefined;
      this._dataLengthTooLong = undefined;
      this._decryptionFailed = undefined;
      this._decryptionFailedOrBadRecordMac = undefined;
      this._dhPublicValueLengthIsWrong = undefined;
      this._digestCheckFailed = undefined;
      this._encryptedLengthTooLong = undefined;
      this._errorGeneratingTmpRsaKey = undefined;
      this._errorInReceivedCipherList = undefined;
      this._excessiveMessageSize = undefined;
      this._extraDataInMessage = undefined;
      this._gotAFinBeforeACcs = undefined;
      this._httpRequest = undefined;
      this._httpsProxyRequest = undefined;
      this._illegalPadding = undefined;
      this._inappropriateFallback = undefined;
      this._invalidChallengeLength = undefined;
      this._invalidCommand = undefined;
      this._invalidPurpose = undefined;
      this._invalidStatusResponse = undefined;
      this._invalidTrust = undefined;
      this._keyArgTooLong = undefined;
      this._krb5 = undefined;
      this._krb5ClientCcPrincipal = undefined;
      this._krb5ClientGetCred = undefined;
      this._krb5ClientInit = undefined;
      this._krb5ClientMkReq = undefined;
      this._krb5ServerBadTicket = undefined;
      this._krb5ServerInit = undefined;
      this._krb5ServerRdReq = undefined;
      this._krb5ServerTktExpired = undefined;
      this._krb5ServerTktNotYetValid = undefined;
      this._krb5ServerTktSkew = undefined;
      this._lengthMismatch = undefined;
      this._lengthTooShort = undefined;
      this._libraryBug = undefined;
      this._libraryHasNoCiphers = undefined;
      this._mastKeyTooLong = undefined;
      this._messageTooLong = undefined;
      this._missingDhDsaCert = undefined;
      this._missingDhKey = undefined;
      this._missingDhRsaCert = undefined;
      this._missingDsaSigningCert = undefined;
      this._missingExportTmpDhKey = undefined;
      this._missingExportTmpRsaKey = undefined;
      this._missingRsaCertificate = undefined;
      this._missingRsaEncryptingCert = undefined;
      this._missingRsaSigningCert = undefined;
      this._missingTmpDhKey = undefined;
      this._missingTmpRsaKey = undefined;
      this._missingTmpRsaPkey = undefined;
      this._missingVerifyMessage = undefined;
      this._multipleSgcRestarts = undefined;
      this._noCertificateAssigned = undefined;
      this._noCertificateReturned = undefined;
      this._noCertificateSet = undefined;
      this._noCertificateSpecified = undefined;
      this._noCertificatesReturned = undefined;
      this._noCipherList = undefined;
      this._noCipherMatch = undefined;
      this._noCiphersAvailable = undefined;
      this._noCiphersPassed = undefined;
      this._noCiphersSpecified = undefined;
      this._noClientCertReceived = undefined;
      this._noCompressionSpecified = undefined;
      this._noMethodSpecified = undefined;
      this._noPrivateKeyAssigned = undefined;
      this._noPrivatekey = undefined;
      this._noProtocolsAvailable = undefined;
      this._noPublickey = undefined;
      this._noRequiredDigest = undefined;
      this._noSharedCipher = undefined;
      this._noVerifyCallback = undefined;
      this._nonSslv2InitialPacket = undefined;
      this._nullSslCtx = undefined;
      this._nullSslMethodPassed = undefined;
      this._oldSessionCipherNotReturned = undefined;
      this._packetLengthTooLong = undefined;
      this._parseTlsext = undefined;
      this._pathTooLong = undefined;
      this._peerDidNotReturnACertificate = undefined;
      this._peerError = undefined;
      this._peerErrorCertificate = undefined;
      this._peerErrorNoCertificate = undefined;
      this._peerErrorNoCipher = undefined;
      this._peerErrorUnsupportedCertificateType = undefined;
      this._preMacLengthTooLong = undefined;
      this._problemsMappingCipherFunctions = undefined;
      this._protocolIsShutdown = undefined;
      this._publicKeyEncryptError = undefined;
      this._publicKeyIsNotRsa = undefined;
      this._publicKeyNotRsa = undefined;
      this._readBioNotSet = undefined;
      this._readWrongPacketType = undefined;
      this._recordLengthMismatch = undefined;
      this._recordTooLarge = undefined;
      this._recordTooSmall = undefined;
      this._requiredCipherMissing = undefined;
      this._reuseCertLengthNotZero = undefined;
      this._reuseCertTypeNotZero = undefined;
      this._reuseCipherListNotZero = undefined;
      this._scsvReceivedWhenRenegotiating = undefined;
      this._serverhelloTlsext = undefined;
      this._sessionIdContextUninitialized = undefined;
      this._shortRead = undefined;
      this._signatureForNonSigningCertificate = undefined;
      this._ssl23DoingSessionIdReuse = undefined;
      this._ssl2ConnectionIdTooLong = undefined;
      this._ssl3ExtInvalidServername = undefined;
      this._ssl3ExtInvalidServernameType = undefined;
      this._ssl3SessionIdTooLong = undefined;
      this._ssl3SessionIdTooShort = undefined;
      this._sslCtxHasNoDefaultSslVersion = undefined;
      this._sslHandshakeFailure = undefined;
      this._sslLibraryHasNoCiphers = undefined;
      this._sslSessionIdCallbackFailed = undefined;
      this._sslSessionIdConflict = undefined;
      this._sslSessionIdContextTooLong = undefined;
      this._sslSessionIdHasBadLength = undefined;
      this._sslSessionIdIsDifferent = undefined;
      this._sslv3AlertBadCertificate = undefined;
      this._sslv3AlertBadRecordMac = undefined;
      this._sslv3AlertCertificateExpired = undefined;
      this._sslv3AlertCertificateRevoked = undefined;
      this._sslv3AlertCertificateUnknown = undefined;
      this._sslv3AlertDecompressionFailure = undefined;
      this._sslv3AlertHandshakeFailure = undefined;
      this._sslv3AlertIllegalParameter = undefined;
      this._sslv3AlertNoCertificate = undefined;
      this._sslv3AlertPeerErrorCert = undefined;
      this._sslv3AlertPeerErrorNoCert = undefined;
      this._sslv3AlertPeerErrorNoCipher = undefined;
      this._sslv3AlertPeerErrorUnsuppCertType = undefined;
      this._sslv3AlertUnexpectedMsg = undefined;
      this._sslv3AlertUnknownRemoteErrType = undefined;
      this._sslv3AlertUnspportedCert = undefined;
      this._tlsClientCertReqWithAnonCipher = undefined;
      this._tlsInvalidEcpointformatList = undefined;
      this._tlsPeerDidNotRespondWithCertList = undefined;
      this._tlsRsaEncryptedValueLengthIsWrong = undefined;
      this._tlsv1AlertAccessDenied = undefined;
      this._tlsv1AlertDecodeError = undefined;
      this._tlsv1AlertDecryptError = undefined;
      this._tlsv1AlertDecryptionFailed = undefined;
      this._tlsv1AlertExportRestriction = undefined;
      this._tlsv1AlertInsufficientSecurity = undefined;
      this._tlsv1AlertInternalError = undefined;
      this._tlsv1AlertNoRenegotiation = undefined;
      this._tlsv1AlertProtocolVersion = undefined;
      this._tlsv1AlertRecordOverflow = undefined;
      this._tlsv1AlertUnknownCa = undefined;
      this._tlsv1AlertUserCancelled = undefined;
      this._triedToUseUnsupportedCipher = undefined;
      this._unableToDecodeDhCerts = undefined;
      this._unableToExtractPublicKey = undefined;
      this._unableToFindDhParameters = undefined;
      this._unableToFindPublicKeyParameters = undefined;
      this._unableToFindSslMethod = undefined;
      this._unableToLoadSsl2Md5Routines = undefined;
      this._unableToLoadSsl3Md5Routines = undefined;
      this._unableToLoadSsl3Sha1Routines = undefined;
      this._unexpectedMessage = undefined;
      this._unexpectedRecord = undefined;
      this._uninitialized = undefined;
      this._unknownAlertType = undefined;
      this._unknownCertificateType = undefined;
      this._unknownCipherReturned = undefined;
      this._unknownCipherType = undefined;
      this._unknownKeyExchangeType = undefined;
      this._unknownPkeyType = undefined;
      this._unknownProtocol = undefined;
      this._unknownRemoteErrorType = undefined;
      this._unknownSslVersion = undefined;
      this._unknownState = undefined;
      this._unsupportedCipher = undefined;
      this._unsupportedCompressionAlgorithm = undefined;
      this._unsupportedDigestType = undefined;
      this._unsupportedEllipticCurve = undefined;
      this._unsupportedOption = undefined;
      this._unsupportedProtocol = undefined;
      this._unsupportedSslVersion = undefined;
      this._unsupportedStatusType = undefined;
      this._writeBioNotSet = undefined;
      this._wrongCipherReturned = undefined;
      this._wrongMessageType = undefined;
      this._wrongNumberOfKeyBits = undefined;
      this._wrongSignatureLength = undefined;
      this._wrongSignatureSize = undefined;
      this._wrongSslVersion = undefined;
      this._wrongVersionNumber = undefined;
      this._x509Lib = undefined;
      this._x509VerificationSetupProblems = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appDataInHandshake = value.appDataInHandshake;
      this._attemptToReuseSessInDiffContext = value.attemptToReuseSessInDiffContext;
      this._badAlertRecord = value.badAlertRecord;
      this._badAuthenticationType = value.badAuthenticationType;
      this._badChangeCipherSpec = value.badChangeCipherSpec;
      this._badChecksum = value.badChecksum;
      this._badDataReturnedByCallback = value.badDataReturnedByCallback;
      this._badDecompression = value.badDecompression;
      this._badDhGLength = value.badDhGLength;
      this._badDhPLength = value.badDhPLength;
      this._badDhPubKeyLength = value.badDhPubKeyLength;
      this._badDigestLength = value.badDigestLength;
      this._badDsaSignature = value.badDsaSignature;
      this._badEccCert = value.badEccCert;
      this._badEcdsaSig = value.badEcdsaSig;
      this._badEcpoint = value.badEcpoint;
      this._badHandshakeLength = value.badHandshakeLength;
      this._badHelloRequest = value.badHelloRequest;
      this._badLength = value.badLength;
      this._badMacDecode = value.badMacDecode;
      this._badMessageType = value.badMessageType;
      this._badPacketLength = value.badPacketLength;
      this._badProtocolVersionNumber = value.badProtocolVersionNumber;
      this._badResponseArgument = value.badResponseArgument;
      this._badRsaDecrypt = value.badRsaDecrypt;
      this._badRsaELength = value.badRsaELength;
      this._badRsaEncrypt = value.badRsaEncrypt;
      this._badRsaModulusLength = value.badRsaModulusLength;
      this._badRsaSignature = value.badRsaSignature;
      this._badSignature = value.badSignature;
      this._badSslFiletype = value.badSslFiletype;
      this._badSslSessionIdLength = value.badSslSessionIdLength;
      this._badState = value.badState;
      this._badWriteRetry = value.badWriteRetry;
      this._bioNotSet = value.bioNotSet;
      this._blockCipherPadIsWrong = value.blockCipherPadIsWrong;
      this._bnLib = value.bnLib;
      this._caDnLengthMismatch = value.caDnLengthMismatch;
      this._caDnTooLong = value.caDnTooLong;
      this._ccsReceivedEarly = value.ccsReceivedEarly;
      this._certLengthMismatch = value.certLengthMismatch;
      this._certificateVerifyFailed = value.certificateVerifyFailed;
      this._challengeIsDifferent = value.challengeIsDifferent;
      this._cipherCodeWrongLength = value.cipherCodeWrongLength;
      this._cipherOrHashUnavailable = value.cipherOrHashUnavailable;
      this._cipherTableSrcError = value.cipherTableSrcError;
      this._clienthelloTlsext = value.clienthelloTlsext;
      this._compressedLengthTooLong = value.compressedLengthTooLong;
      this._compressionFailure = value.compressionFailure;
      this._compressionLibraryError = value.compressionLibraryError;
      this._connectionIdIsDifferent = value.connectionIdIsDifferent;
      this._connectionTypeNotSet = value.connectionTypeNotSet;
      this._cookieMismatch = value.cookieMismatch;
      this._dataBetweenCcsAndFinished = value.dataBetweenCcsAndFinished;
      this._dataLengthTooLong = value.dataLengthTooLong;
      this._decryptionFailed = value.decryptionFailed;
      this._decryptionFailedOrBadRecordMac = value.decryptionFailedOrBadRecordMac;
      this._dhPublicValueLengthIsWrong = value.dhPublicValueLengthIsWrong;
      this._digestCheckFailed = value.digestCheckFailed;
      this._encryptedLengthTooLong = value.encryptedLengthTooLong;
      this._errorGeneratingTmpRsaKey = value.errorGeneratingTmpRsaKey;
      this._errorInReceivedCipherList = value.errorInReceivedCipherList;
      this._excessiveMessageSize = value.excessiveMessageSize;
      this._extraDataInMessage = value.extraDataInMessage;
      this._gotAFinBeforeACcs = value.gotAFinBeforeACcs;
      this._httpRequest = value.httpRequest;
      this._httpsProxyRequest = value.httpsProxyRequest;
      this._illegalPadding = value.illegalPadding;
      this._inappropriateFallback = value.inappropriateFallback;
      this._invalidChallengeLength = value.invalidChallengeLength;
      this._invalidCommand = value.invalidCommand;
      this._invalidPurpose = value.invalidPurpose;
      this._invalidStatusResponse = value.invalidStatusResponse;
      this._invalidTrust = value.invalidTrust;
      this._keyArgTooLong = value.keyArgTooLong;
      this._krb5 = value.krb5;
      this._krb5ClientCcPrincipal = value.krb5ClientCcPrincipal;
      this._krb5ClientGetCred = value.krb5ClientGetCred;
      this._krb5ClientInit = value.krb5ClientInit;
      this._krb5ClientMkReq = value.krb5ClientMkReq;
      this._krb5ServerBadTicket = value.krb5ServerBadTicket;
      this._krb5ServerInit = value.krb5ServerInit;
      this._krb5ServerRdReq = value.krb5ServerRdReq;
      this._krb5ServerTktExpired = value.krb5ServerTktExpired;
      this._krb5ServerTktNotYetValid = value.krb5ServerTktNotYetValid;
      this._krb5ServerTktSkew = value.krb5ServerTktSkew;
      this._lengthMismatch = value.lengthMismatch;
      this._lengthTooShort = value.lengthTooShort;
      this._libraryBug = value.libraryBug;
      this._libraryHasNoCiphers = value.libraryHasNoCiphers;
      this._mastKeyTooLong = value.mastKeyTooLong;
      this._messageTooLong = value.messageTooLong;
      this._missingDhDsaCert = value.missingDhDsaCert;
      this._missingDhKey = value.missingDhKey;
      this._missingDhRsaCert = value.missingDhRsaCert;
      this._missingDsaSigningCert = value.missingDsaSigningCert;
      this._missingExportTmpDhKey = value.missingExportTmpDhKey;
      this._missingExportTmpRsaKey = value.missingExportTmpRsaKey;
      this._missingRsaCertificate = value.missingRsaCertificate;
      this._missingRsaEncryptingCert = value.missingRsaEncryptingCert;
      this._missingRsaSigningCert = value.missingRsaSigningCert;
      this._missingTmpDhKey = value.missingTmpDhKey;
      this._missingTmpRsaKey = value.missingTmpRsaKey;
      this._missingTmpRsaPkey = value.missingTmpRsaPkey;
      this._missingVerifyMessage = value.missingVerifyMessage;
      this._multipleSgcRestarts = value.multipleSgcRestarts;
      this._noCertificateAssigned = value.noCertificateAssigned;
      this._noCertificateReturned = value.noCertificateReturned;
      this._noCertificateSet = value.noCertificateSet;
      this._noCertificateSpecified = value.noCertificateSpecified;
      this._noCertificatesReturned = value.noCertificatesReturned;
      this._noCipherList = value.noCipherList;
      this._noCipherMatch = value.noCipherMatch;
      this._noCiphersAvailable = value.noCiphersAvailable;
      this._noCiphersPassed = value.noCiphersPassed;
      this._noCiphersSpecified = value.noCiphersSpecified;
      this._noClientCertReceived = value.noClientCertReceived;
      this._noCompressionSpecified = value.noCompressionSpecified;
      this._noMethodSpecified = value.noMethodSpecified;
      this._noPrivateKeyAssigned = value.noPrivateKeyAssigned;
      this._noPrivatekey = value.noPrivatekey;
      this._noProtocolsAvailable = value.noProtocolsAvailable;
      this._noPublickey = value.noPublickey;
      this._noRequiredDigest = value.noRequiredDigest;
      this._noSharedCipher = value.noSharedCipher;
      this._noVerifyCallback = value.noVerifyCallback;
      this._nonSslv2InitialPacket = value.nonSslv2InitialPacket;
      this._nullSslCtx = value.nullSslCtx;
      this._nullSslMethodPassed = value.nullSslMethodPassed;
      this._oldSessionCipherNotReturned = value.oldSessionCipherNotReturned;
      this._packetLengthTooLong = value.packetLengthTooLong;
      this._parseTlsext = value.parseTlsext;
      this._pathTooLong = value.pathTooLong;
      this._peerDidNotReturnACertificate = value.peerDidNotReturnACertificate;
      this._peerError = value.peerError;
      this._peerErrorCertificate = value.peerErrorCertificate;
      this._peerErrorNoCertificate = value.peerErrorNoCertificate;
      this._peerErrorNoCipher = value.peerErrorNoCipher;
      this._peerErrorUnsupportedCertificateType = value.peerErrorUnsupportedCertificateType;
      this._preMacLengthTooLong = value.preMacLengthTooLong;
      this._problemsMappingCipherFunctions = value.problemsMappingCipherFunctions;
      this._protocolIsShutdown = value.protocolIsShutdown;
      this._publicKeyEncryptError = value.publicKeyEncryptError;
      this._publicKeyIsNotRsa = value.publicKeyIsNotRsa;
      this._publicKeyNotRsa = value.publicKeyNotRsa;
      this._readBioNotSet = value.readBioNotSet;
      this._readWrongPacketType = value.readWrongPacketType;
      this._recordLengthMismatch = value.recordLengthMismatch;
      this._recordTooLarge = value.recordTooLarge;
      this._recordTooSmall = value.recordTooSmall;
      this._requiredCipherMissing = value.requiredCipherMissing;
      this._reuseCertLengthNotZero = value.reuseCertLengthNotZero;
      this._reuseCertTypeNotZero = value.reuseCertTypeNotZero;
      this._reuseCipherListNotZero = value.reuseCipherListNotZero;
      this._scsvReceivedWhenRenegotiating = value.scsvReceivedWhenRenegotiating;
      this._serverhelloTlsext = value.serverhelloTlsext;
      this._sessionIdContextUninitialized = value.sessionIdContextUninitialized;
      this._shortRead = value.shortRead;
      this._signatureForNonSigningCertificate = value.signatureForNonSigningCertificate;
      this._ssl23DoingSessionIdReuse = value.ssl23DoingSessionIdReuse;
      this._ssl2ConnectionIdTooLong = value.ssl2ConnectionIdTooLong;
      this._ssl3ExtInvalidServername = value.ssl3ExtInvalidServername;
      this._ssl3ExtInvalidServernameType = value.ssl3ExtInvalidServernameType;
      this._ssl3SessionIdTooLong = value.ssl3SessionIdTooLong;
      this._ssl3SessionIdTooShort = value.ssl3SessionIdTooShort;
      this._sslCtxHasNoDefaultSslVersion = value.sslCtxHasNoDefaultSslVersion;
      this._sslHandshakeFailure = value.sslHandshakeFailure;
      this._sslLibraryHasNoCiphers = value.sslLibraryHasNoCiphers;
      this._sslSessionIdCallbackFailed = value.sslSessionIdCallbackFailed;
      this._sslSessionIdConflict = value.sslSessionIdConflict;
      this._sslSessionIdContextTooLong = value.sslSessionIdContextTooLong;
      this._sslSessionIdHasBadLength = value.sslSessionIdHasBadLength;
      this._sslSessionIdIsDifferent = value.sslSessionIdIsDifferent;
      this._sslv3AlertBadCertificate = value.sslv3AlertBadCertificate;
      this._sslv3AlertBadRecordMac = value.sslv3AlertBadRecordMac;
      this._sslv3AlertCertificateExpired = value.sslv3AlertCertificateExpired;
      this._sslv3AlertCertificateRevoked = value.sslv3AlertCertificateRevoked;
      this._sslv3AlertCertificateUnknown = value.sslv3AlertCertificateUnknown;
      this._sslv3AlertDecompressionFailure = value.sslv3AlertDecompressionFailure;
      this._sslv3AlertHandshakeFailure = value.sslv3AlertHandshakeFailure;
      this._sslv3AlertIllegalParameter = value.sslv3AlertIllegalParameter;
      this._sslv3AlertNoCertificate = value.sslv3AlertNoCertificate;
      this._sslv3AlertPeerErrorCert = value.sslv3AlertPeerErrorCert;
      this._sslv3AlertPeerErrorNoCert = value.sslv3AlertPeerErrorNoCert;
      this._sslv3AlertPeerErrorNoCipher = value.sslv3AlertPeerErrorNoCipher;
      this._sslv3AlertPeerErrorUnsuppCertType = value.sslv3AlertPeerErrorUnsuppCertType;
      this._sslv3AlertUnexpectedMsg = value.sslv3AlertUnexpectedMsg;
      this._sslv3AlertUnknownRemoteErrType = value.sslv3AlertUnknownRemoteErrType;
      this._sslv3AlertUnspportedCert = value.sslv3AlertUnspportedCert;
      this._tlsClientCertReqWithAnonCipher = value.tlsClientCertReqWithAnonCipher;
      this._tlsInvalidEcpointformatList = value.tlsInvalidEcpointformatList;
      this._tlsPeerDidNotRespondWithCertList = value.tlsPeerDidNotRespondWithCertList;
      this._tlsRsaEncryptedValueLengthIsWrong = value.tlsRsaEncryptedValueLengthIsWrong;
      this._tlsv1AlertAccessDenied = value.tlsv1AlertAccessDenied;
      this._tlsv1AlertDecodeError = value.tlsv1AlertDecodeError;
      this._tlsv1AlertDecryptError = value.tlsv1AlertDecryptError;
      this._tlsv1AlertDecryptionFailed = value.tlsv1AlertDecryptionFailed;
      this._tlsv1AlertExportRestriction = value.tlsv1AlertExportRestriction;
      this._tlsv1AlertInsufficientSecurity = value.tlsv1AlertInsufficientSecurity;
      this._tlsv1AlertInternalError = value.tlsv1AlertInternalError;
      this._tlsv1AlertNoRenegotiation = value.tlsv1AlertNoRenegotiation;
      this._tlsv1AlertProtocolVersion = value.tlsv1AlertProtocolVersion;
      this._tlsv1AlertRecordOverflow = value.tlsv1AlertRecordOverflow;
      this._tlsv1AlertUnknownCa = value.tlsv1AlertUnknownCa;
      this._tlsv1AlertUserCancelled = value.tlsv1AlertUserCancelled;
      this._triedToUseUnsupportedCipher = value.triedToUseUnsupportedCipher;
      this._unableToDecodeDhCerts = value.unableToDecodeDhCerts;
      this._unableToExtractPublicKey = value.unableToExtractPublicKey;
      this._unableToFindDhParameters = value.unableToFindDhParameters;
      this._unableToFindPublicKeyParameters = value.unableToFindPublicKeyParameters;
      this._unableToFindSslMethod = value.unableToFindSslMethod;
      this._unableToLoadSsl2Md5Routines = value.unableToLoadSsl2Md5Routines;
      this._unableToLoadSsl3Md5Routines = value.unableToLoadSsl3Md5Routines;
      this._unableToLoadSsl3Sha1Routines = value.unableToLoadSsl3Sha1Routines;
      this._unexpectedMessage = value.unexpectedMessage;
      this._unexpectedRecord = value.unexpectedRecord;
      this._uninitialized = value.uninitialized;
      this._unknownAlertType = value.unknownAlertType;
      this._unknownCertificateType = value.unknownCertificateType;
      this._unknownCipherReturned = value.unknownCipherReturned;
      this._unknownCipherType = value.unknownCipherType;
      this._unknownKeyExchangeType = value.unknownKeyExchangeType;
      this._unknownPkeyType = value.unknownPkeyType;
      this._unknownProtocol = value.unknownProtocol;
      this._unknownRemoteErrorType = value.unknownRemoteErrorType;
      this._unknownSslVersion = value.unknownSslVersion;
      this._unknownState = value.unknownState;
      this._unsupportedCipher = value.unsupportedCipher;
      this._unsupportedCompressionAlgorithm = value.unsupportedCompressionAlgorithm;
      this._unsupportedDigestType = value.unsupportedDigestType;
      this._unsupportedEllipticCurve = value.unsupportedEllipticCurve;
      this._unsupportedOption = value.unsupportedOption;
      this._unsupportedProtocol = value.unsupportedProtocol;
      this._unsupportedSslVersion = value.unsupportedSslVersion;
      this._unsupportedStatusType = value.unsupportedStatusType;
      this._writeBioNotSet = value.writeBioNotSet;
      this._wrongCipherReturned = value.wrongCipherReturned;
      this._wrongMessageType = value.wrongMessageType;
      this._wrongNumberOfKeyBits = value.wrongNumberOfKeyBits;
      this._wrongSignatureLength = value.wrongSignatureLength;
      this._wrongSignatureSize = value.wrongSignatureSize;
      this._wrongSslVersion = value.wrongSslVersion;
      this._wrongVersionNumber = value.wrongVersionNumber;
      this._x509Lib = value.x509Lib;
      this._x509VerificationSetupProblems = value.x509VerificationSetupProblems;
    }
  }

  // app_data_in_handshake - computed: false, optional: true, required: false
  private _appDataInHandshake?: number; 
  public get appDataInHandshake() {
    return this.getNumberAttribute('app_data_in_handshake');
  }
  public set appDataInHandshake(value: number) {
    this._appDataInHandshake = value;
  }
  public resetAppDataInHandshake() {
    this._appDataInHandshake = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appDataInHandshakeInput() {
    return this._appDataInHandshake;
  }

  // attempt_to_reuse_sess_in_diff_context - computed: false, optional: true, required: false
  private _attemptToReuseSessInDiffContext?: number; 
  public get attemptToReuseSessInDiffContext() {
    return this.getNumberAttribute('attempt_to_reuse_sess_in_diff_context');
  }
  public set attemptToReuseSessInDiffContext(value: number) {
    this._attemptToReuseSessInDiffContext = value;
  }
  public resetAttemptToReuseSessInDiffContext() {
    this._attemptToReuseSessInDiffContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attemptToReuseSessInDiffContextInput() {
    return this._attemptToReuseSessInDiffContext;
  }

  // bad_alert_record - computed: false, optional: true, required: false
  private _badAlertRecord?: number; 
  public get badAlertRecord() {
    return this.getNumberAttribute('bad_alert_record');
  }
  public set badAlertRecord(value: number) {
    this._badAlertRecord = value;
  }
  public resetBadAlertRecord() {
    this._badAlertRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badAlertRecordInput() {
    return this._badAlertRecord;
  }

  // bad_authentication_type - computed: false, optional: true, required: false
  private _badAuthenticationType?: number; 
  public get badAuthenticationType() {
    return this.getNumberAttribute('bad_authentication_type');
  }
  public set badAuthenticationType(value: number) {
    this._badAuthenticationType = value;
  }
  public resetBadAuthenticationType() {
    this._badAuthenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badAuthenticationTypeInput() {
    return this._badAuthenticationType;
  }

  // bad_change_cipher_spec - computed: false, optional: true, required: false
  private _badChangeCipherSpec?: number; 
  public get badChangeCipherSpec() {
    return this.getNumberAttribute('bad_change_cipher_spec');
  }
  public set badChangeCipherSpec(value: number) {
    this._badChangeCipherSpec = value;
  }
  public resetBadChangeCipherSpec() {
    this._badChangeCipherSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badChangeCipherSpecInput() {
    return this._badChangeCipherSpec;
  }

  // bad_checksum - computed: false, optional: true, required: false
  private _badChecksum?: number; 
  public get badChecksum() {
    return this.getNumberAttribute('bad_checksum');
  }
  public set badChecksum(value: number) {
    this._badChecksum = value;
  }
  public resetBadChecksum() {
    this._badChecksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badChecksumInput() {
    return this._badChecksum;
  }

  // bad_data_returned_by_callback - computed: false, optional: true, required: false
  private _badDataReturnedByCallback?: number; 
  public get badDataReturnedByCallback() {
    return this.getNumberAttribute('bad_data_returned_by_callback');
  }
  public set badDataReturnedByCallback(value: number) {
    this._badDataReturnedByCallback = value;
  }
  public resetBadDataReturnedByCallback() {
    this._badDataReturnedByCallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badDataReturnedByCallbackInput() {
    return this._badDataReturnedByCallback;
  }

  // bad_decompression - computed: false, optional: true, required: false
  private _badDecompression?: number; 
  public get badDecompression() {
    return this.getNumberAttribute('bad_decompression');
  }
  public set badDecompression(value: number) {
    this._badDecompression = value;
  }
  public resetBadDecompression() {
    this._badDecompression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badDecompressionInput() {
    return this._badDecompression;
  }

  // bad_dh_g_length - computed: false, optional: true, required: false
  private _badDhGLength?: number; 
  public get badDhGLength() {
    return this.getNumberAttribute('bad_dh_g_length');
  }
  public set badDhGLength(value: number) {
    this._badDhGLength = value;
  }
  public resetBadDhGLength() {
    this._badDhGLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badDhGLengthInput() {
    return this._badDhGLength;
  }

  // bad_dh_p_length - computed: false, optional: true, required: false
  private _badDhPLength?: number; 
  public get badDhPLength() {
    return this.getNumberAttribute('bad_dh_p_length');
  }
  public set badDhPLength(value: number) {
    this._badDhPLength = value;
  }
  public resetBadDhPLength() {
    this._badDhPLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badDhPLengthInput() {
    return this._badDhPLength;
  }

  // bad_dh_pub_key_length - computed: false, optional: true, required: false
  private _badDhPubKeyLength?: number; 
  public get badDhPubKeyLength() {
    return this.getNumberAttribute('bad_dh_pub_key_length');
  }
  public set badDhPubKeyLength(value: number) {
    this._badDhPubKeyLength = value;
  }
  public resetBadDhPubKeyLength() {
    this._badDhPubKeyLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badDhPubKeyLengthInput() {
    return this._badDhPubKeyLength;
  }

  // bad_digest_length - computed: false, optional: true, required: false
  private _badDigestLength?: number; 
  public get badDigestLength() {
    return this.getNumberAttribute('bad_digest_length');
  }
  public set badDigestLength(value: number) {
    this._badDigestLength = value;
  }
  public resetBadDigestLength() {
    this._badDigestLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badDigestLengthInput() {
    return this._badDigestLength;
  }

  // bad_dsa_signature - computed: false, optional: true, required: false
  private _badDsaSignature?: number; 
  public get badDsaSignature() {
    return this.getNumberAttribute('bad_dsa_signature');
  }
  public set badDsaSignature(value: number) {
    this._badDsaSignature = value;
  }
  public resetBadDsaSignature() {
    this._badDsaSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badDsaSignatureInput() {
    return this._badDsaSignature;
  }

  // bad_ecc_cert - computed: false, optional: true, required: false
  private _badEccCert?: number; 
  public get badEccCert() {
    return this.getNumberAttribute('bad_ecc_cert');
  }
  public set badEccCert(value: number) {
    this._badEccCert = value;
  }
  public resetBadEccCert() {
    this._badEccCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badEccCertInput() {
    return this._badEccCert;
  }

  // bad_ecdsa_sig - computed: false, optional: true, required: false
  private _badEcdsaSig?: number; 
  public get badEcdsaSig() {
    return this.getNumberAttribute('bad_ecdsa_sig');
  }
  public set badEcdsaSig(value: number) {
    this._badEcdsaSig = value;
  }
  public resetBadEcdsaSig() {
    this._badEcdsaSig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badEcdsaSigInput() {
    return this._badEcdsaSig;
  }

  // bad_ecpoint - computed: false, optional: true, required: false
  private _badEcpoint?: number; 
  public get badEcpoint() {
    return this.getNumberAttribute('bad_ecpoint');
  }
  public set badEcpoint(value: number) {
    this._badEcpoint = value;
  }
  public resetBadEcpoint() {
    this._badEcpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badEcpointInput() {
    return this._badEcpoint;
  }

  // bad_handshake_length - computed: false, optional: true, required: false
  private _badHandshakeLength?: number; 
  public get badHandshakeLength() {
    return this.getNumberAttribute('bad_handshake_length');
  }
  public set badHandshakeLength(value: number) {
    this._badHandshakeLength = value;
  }
  public resetBadHandshakeLength() {
    this._badHandshakeLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badHandshakeLengthInput() {
    return this._badHandshakeLength;
  }

  // bad_hello_request - computed: false, optional: true, required: false
  private _badHelloRequest?: number; 
  public get badHelloRequest() {
    return this.getNumberAttribute('bad_hello_request');
  }
  public set badHelloRequest(value: number) {
    this._badHelloRequest = value;
  }
  public resetBadHelloRequest() {
    this._badHelloRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badHelloRequestInput() {
    return this._badHelloRequest;
  }

  // bad_length - computed: false, optional: true, required: false
  private _badLength?: number; 
  public get badLength() {
    return this.getNumberAttribute('bad_length');
  }
  public set badLength(value: number) {
    this._badLength = value;
  }
  public resetBadLength() {
    this._badLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badLengthInput() {
    return this._badLength;
  }

  // bad_mac_decode - computed: false, optional: true, required: false
  private _badMacDecode?: number; 
  public get badMacDecode() {
    return this.getNumberAttribute('bad_mac_decode');
  }
  public set badMacDecode(value: number) {
    this._badMacDecode = value;
  }
  public resetBadMacDecode() {
    this._badMacDecode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badMacDecodeInput() {
    return this._badMacDecode;
  }

  // bad_message_type - computed: false, optional: true, required: false
  private _badMessageType?: number; 
  public get badMessageType() {
    return this.getNumberAttribute('bad_message_type');
  }
  public set badMessageType(value: number) {
    this._badMessageType = value;
  }
  public resetBadMessageType() {
    this._badMessageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badMessageTypeInput() {
    return this._badMessageType;
  }

  // bad_packet_length - computed: false, optional: true, required: false
  private _badPacketLength?: number; 
  public get badPacketLength() {
    return this.getNumberAttribute('bad_packet_length');
  }
  public set badPacketLength(value: number) {
    this._badPacketLength = value;
  }
  public resetBadPacketLength() {
    this._badPacketLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badPacketLengthInput() {
    return this._badPacketLength;
  }

  // bad_protocol_version_number - computed: false, optional: true, required: false
  private _badProtocolVersionNumber?: number; 
  public get badProtocolVersionNumber() {
    return this.getNumberAttribute('bad_protocol_version_number');
  }
  public set badProtocolVersionNumber(value: number) {
    this._badProtocolVersionNumber = value;
  }
  public resetBadProtocolVersionNumber() {
    this._badProtocolVersionNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badProtocolVersionNumberInput() {
    return this._badProtocolVersionNumber;
  }

  // bad_response_argument - computed: false, optional: true, required: false
  private _badResponseArgument?: number; 
  public get badResponseArgument() {
    return this.getNumberAttribute('bad_response_argument');
  }
  public set badResponseArgument(value: number) {
    this._badResponseArgument = value;
  }
  public resetBadResponseArgument() {
    this._badResponseArgument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badResponseArgumentInput() {
    return this._badResponseArgument;
  }

  // bad_rsa_decrypt - computed: false, optional: true, required: false
  private _badRsaDecrypt?: number; 
  public get badRsaDecrypt() {
    return this.getNumberAttribute('bad_rsa_decrypt');
  }
  public set badRsaDecrypt(value: number) {
    this._badRsaDecrypt = value;
  }
  public resetBadRsaDecrypt() {
    this._badRsaDecrypt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badRsaDecryptInput() {
    return this._badRsaDecrypt;
  }

  // bad_rsa_e_length - computed: false, optional: true, required: false
  private _badRsaELength?: number; 
  public get badRsaELength() {
    return this.getNumberAttribute('bad_rsa_e_length');
  }
  public set badRsaELength(value: number) {
    this._badRsaELength = value;
  }
  public resetBadRsaELength() {
    this._badRsaELength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badRsaELengthInput() {
    return this._badRsaELength;
  }

  // bad_rsa_encrypt - computed: false, optional: true, required: false
  private _badRsaEncrypt?: number; 
  public get badRsaEncrypt() {
    return this.getNumberAttribute('bad_rsa_encrypt');
  }
  public set badRsaEncrypt(value: number) {
    this._badRsaEncrypt = value;
  }
  public resetBadRsaEncrypt() {
    this._badRsaEncrypt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badRsaEncryptInput() {
    return this._badRsaEncrypt;
  }

  // bad_rsa_modulus_length - computed: false, optional: true, required: false
  private _badRsaModulusLength?: number; 
  public get badRsaModulusLength() {
    return this.getNumberAttribute('bad_rsa_modulus_length');
  }
  public set badRsaModulusLength(value: number) {
    this._badRsaModulusLength = value;
  }
  public resetBadRsaModulusLength() {
    this._badRsaModulusLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badRsaModulusLengthInput() {
    return this._badRsaModulusLength;
  }

  // bad_rsa_signature - computed: false, optional: true, required: false
  private _badRsaSignature?: number; 
  public get badRsaSignature() {
    return this.getNumberAttribute('bad_rsa_signature');
  }
  public set badRsaSignature(value: number) {
    this._badRsaSignature = value;
  }
  public resetBadRsaSignature() {
    this._badRsaSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badRsaSignatureInput() {
    return this._badRsaSignature;
  }

  // bad_signature - computed: false, optional: true, required: false
  private _badSignature?: number; 
  public get badSignature() {
    return this.getNumberAttribute('bad_signature');
  }
  public set badSignature(value: number) {
    this._badSignature = value;
  }
  public resetBadSignature() {
    this._badSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badSignatureInput() {
    return this._badSignature;
  }

  // bad_ssl_filetype - computed: false, optional: true, required: false
  private _badSslFiletype?: number; 
  public get badSslFiletype() {
    return this.getNumberAttribute('bad_ssl_filetype');
  }
  public set badSslFiletype(value: number) {
    this._badSslFiletype = value;
  }
  public resetBadSslFiletype() {
    this._badSslFiletype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badSslFiletypeInput() {
    return this._badSslFiletype;
  }

  // bad_ssl_session_id_length - computed: false, optional: true, required: false
  private _badSslSessionIdLength?: number; 
  public get badSslSessionIdLength() {
    return this.getNumberAttribute('bad_ssl_session_id_length');
  }
  public set badSslSessionIdLength(value: number) {
    this._badSslSessionIdLength = value;
  }
  public resetBadSslSessionIdLength() {
    this._badSslSessionIdLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badSslSessionIdLengthInput() {
    return this._badSslSessionIdLength;
  }

  // bad_state - computed: false, optional: true, required: false
  private _badState?: number; 
  public get badState() {
    return this.getNumberAttribute('bad_state');
  }
  public set badState(value: number) {
    this._badState = value;
  }
  public resetBadState() {
    this._badState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badStateInput() {
    return this._badState;
  }

  // bad_write_retry - computed: false, optional: true, required: false
  private _badWriteRetry?: number; 
  public get badWriteRetry() {
    return this.getNumberAttribute('bad_write_retry');
  }
  public set badWriteRetry(value: number) {
    this._badWriteRetry = value;
  }
  public resetBadWriteRetry() {
    this._badWriteRetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badWriteRetryInput() {
    return this._badWriteRetry;
  }

  // bio_not_set - computed: false, optional: true, required: false
  private _bioNotSet?: number; 
  public get bioNotSet() {
    return this.getNumberAttribute('bio_not_set');
  }
  public set bioNotSet(value: number) {
    this._bioNotSet = value;
  }
  public resetBioNotSet() {
    this._bioNotSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bioNotSetInput() {
    return this._bioNotSet;
  }

  // block_cipher_pad_is_wrong - computed: false, optional: true, required: false
  private _blockCipherPadIsWrong?: number; 
  public get blockCipherPadIsWrong() {
    return this.getNumberAttribute('block_cipher_pad_is_wrong');
  }
  public set blockCipherPadIsWrong(value: number) {
    this._blockCipherPadIsWrong = value;
  }
  public resetBlockCipherPadIsWrong() {
    this._blockCipherPadIsWrong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockCipherPadIsWrongInput() {
    return this._blockCipherPadIsWrong;
  }

  // bn_lib - computed: false, optional: true, required: false
  private _bnLib?: number; 
  public get bnLib() {
    return this.getNumberAttribute('bn_lib');
  }
  public set bnLib(value: number) {
    this._bnLib = value;
  }
  public resetBnLib() {
    this._bnLib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bnLibInput() {
    return this._bnLib;
  }

  // ca_dn_length_mismatch - computed: false, optional: true, required: false
  private _caDnLengthMismatch?: number; 
  public get caDnLengthMismatch() {
    return this.getNumberAttribute('ca_dn_length_mismatch');
  }
  public set caDnLengthMismatch(value: number) {
    this._caDnLengthMismatch = value;
  }
  public resetCaDnLengthMismatch() {
    this._caDnLengthMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caDnLengthMismatchInput() {
    return this._caDnLengthMismatch;
  }

  // ca_dn_too_long - computed: false, optional: true, required: false
  private _caDnTooLong?: number; 
  public get caDnTooLong() {
    return this.getNumberAttribute('ca_dn_too_long');
  }
  public set caDnTooLong(value: number) {
    this._caDnTooLong = value;
  }
  public resetCaDnTooLong() {
    this._caDnTooLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caDnTooLongInput() {
    return this._caDnTooLong;
  }

  // ccs_received_early - computed: false, optional: true, required: false
  private _ccsReceivedEarly?: number; 
  public get ccsReceivedEarly() {
    return this.getNumberAttribute('ccs_received_early');
  }
  public set ccsReceivedEarly(value: number) {
    this._ccsReceivedEarly = value;
  }
  public resetCcsReceivedEarly() {
    this._ccsReceivedEarly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccsReceivedEarlyInput() {
    return this._ccsReceivedEarly;
  }

  // cert_length_mismatch - computed: false, optional: true, required: false
  private _certLengthMismatch?: number; 
  public get certLengthMismatch() {
    return this.getNumberAttribute('cert_length_mismatch');
  }
  public set certLengthMismatch(value: number) {
    this._certLengthMismatch = value;
  }
  public resetCertLengthMismatch() {
    this._certLengthMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certLengthMismatchInput() {
    return this._certLengthMismatch;
  }

  // certificate_verify_failed - computed: false, optional: true, required: false
  private _certificateVerifyFailed?: number; 
  public get certificateVerifyFailed() {
    return this.getNumberAttribute('certificate_verify_failed');
  }
  public set certificateVerifyFailed(value: number) {
    this._certificateVerifyFailed = value;
  }
  public resetCertificateVerifyFailed() {
    this._certificateVerifyFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateVerifyFailedInput() {
    return this._certificateVerifyFailed;
  }

  // challenge_is_different - computed: false, optional: true, required: false
  private _challengeIsDifferent?: number; 
  public get challengeIsDifferent() {
    return this.getNumberAttribute('challenge_is_different');
  }
  public set challengeIsDifferent(value: number) {
    this._challengeIsDifferent = value;
  }
  public resetChallengeIsDifferent() {
    this._challengeIsDifferent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeIsDifferentInput() {
    return this._challengeIsDifferent;
  }

  // cipher_code_wrong_length - computed: false, optional: true, required: false
  private _cipherCodeWrongLength?: number; 
  public get cipherCodeWrongLength() {
    return this.getNumberAttribute('cipher_code_wrong_length');
  }
  public set cipherCodeWrongLength(value: number) {
    this._cipherCodeWrongLength = value;
  }
  public resetCipherCodeWrongLength() {
    this._cipherCodeWrongLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherCodeWrongLengthInput() {
    return this._cipherCodeWrongLength;
  }

  // cipher_or_hash_unavailable - computed: false, optional: true, required: false
  private _cipherOrHashUnavailable?: number; 
  public get cipherOrHashUnavailable() {
    return this.getNumberAttribute('cipher_or_hash_unavailable');
  }
  public set cipherOrHashUnavailable(value: number) {
    this._cipherOrHashUnavailable = value;
  }
  public resetCipherOrHashUnavailable() {
    this._cipherOrHashUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherOrHashUnavailableInput() {
    return this._cipherOrHashUnavailable;
  }

  // cipher_table_src_error - computed: false, optional: true, required: false
  private _cipherTableSrcError?: number; 
  public get cipherTableSrcError() {
    return this.getNumberAttribute('cipher_table_src_error');
  }
  public set cipherTableSrcError(value: number) {
    this._cipherTableSrcError = value;
  }
  public resetCipherTableSrcError() {
    this._cipherTableSrcError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherTableSrcErrorInput() {
    return this._cipherTableSrcError;
  }

  // clienthello_tlsext - computed: false, optional: true, required: false
  private _clienthelloTlsext?: number; 
  public get clienthelloTlsext() {
    return this.getNumberAttribute('clienthello_tlsext');
  }
  public set clienthelloTlsext(value: number) {
    this._clienthelloTlsext = value;
  }
  public resetClienthelloTlsext() {
    this._clienthelloTlsext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clienthelloTlsextInput() {
    return this._clienthelloTlsext;
  }

  // compressed_length_too_long - computed: false, optional: true, required: false
  private _compressedLengthTooLong?: number; 
  public get compressedLengthTooLong() {
    return this.getNumberAttribute('compressed_length_too_long');
  }
  public set compressedLengthTooLong(value: number) {
    this._compressedLengthTooLong = value;
  }
  public resetCompressedLengthTooLong() {
    this._compressedLengthTooLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressedLengthTooLongInput() {
    return this._compressedLengthTooLong;
  }

  // compression_failure - computed: false, optional: true, required: false
  private _compressionFailure?: number; 
  public get compressionFailure() {
    return this.getNumberAttribute('compression_failure');
  }
  public set compressionFailure(value: number) {
    this._compressionFailure = value;
  }
  public resetCompressionFailure() {
    this._compressionFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionFailureInput() {
    return this._compressionFailure;
  }

  // compression_library_error - computed: false, optional: true, required: false
  private _compressionLibraryError?: number; 
  public get compressionLibraryError() {
    return this.getNumberAttribute('compression_library_error');
  }
  public set compressionLibraryError(value: number) {
    this._compressionLibraryError = value;
  }
  public resetCompressionLibraryError() {
    this._compressionLibraryError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionLibraryErrorInput() {
    return this._compressionLibraryError;
  }

  // connection_id_is_different - computed: false, optional: true, required: false
  private _connectionIdIsDifferent?: number; 
  public get connectionIdIsDifferent() {
    return this.getNumberAttribute('connection_id_is_different');
  }
  public set connectionIdIsDifferent(value: number) {
    this._connectionIdIsDifferent = value;
  }
  public resetConnectionIdIsDifferent() {
    this._connectionIdIsDifferent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdIsDifferentInput() {
    return this._connectionIdIsDifferent;
  }

  // connection_type_not_set - computed: false, optional: true, required: false
  private _connectionTypeNotSet?: number; 
  public get connectionTypeNotSet() {
    return this.getNumberAttribute('connection_type_not_set');
  }
  public set connectionTypeNotSet(value: number) {
    this._connectionTypeNotSet = value;
  }
  public resetConnectionTypeNotSet() {
    this._connectionTypeNotSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTypeNotSetInput() {
    return this._connectionTypeNotSet;
  }

  // cookie_mismatch - computed: false, optional: true, required: false
  private _cookieMismatch?: number; 
  public get cookieMismatch() {
    return this.getNumberAttribute('cookie_mismatch');
  }
  public set cookieMismatch(value: number) {
    this._cookieMismatch = value;
  }
  public resetCookieMismatch() {
    this._cookieMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieMismatchInput() {
    return this._cookieMismatch;
  }

  // data_between_ccs_and_finished - computed: false, optional: true, required: false
  private _dataBetweenCcsAndFinished?: number; 
  public get dataBetweenCcsAndFinished() {
    return this.getNumberAttribute('data_between_ccs_and_finished');
  }
  public set dataBetweenCcsAndFinished(value: number) {
    this._dataBetweenCcsAndFinished = value;
  }
  public resetDataBetweenCcsAndFinished() {
    this._dataBetweenCcsAndFinished = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataBetweenCcsAndFinishedInput() {
    return this._dataBetweenCcsAndFinished;
  }

  // data_length_too_long - computed: false, optional: true, required: false
  private _dataLengthTooLong?: number; 
  public get dataLengthTooLong() {
    return this.getNumberAttribute('data_length_too_long');
  }
  public set dataLengthTooLong(value: number) {
    this._dataLengthTooLong = value;
  }
  public resetDataLengthTooLong() {
    this._dataLengthTooLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLengthTooLongInput() {
    return this._dataLengthTooLong;
  }

  // decryption_failed - computed: false, optional: true, required: false
  private _decryptionFailed?: number; 
  public get decryptionFailed() {
    return this.getNumberAttribute('decryption_failed');
  }
  public set decryptionFailed(value: number) {
    this._decryptionFailed = value;
  }
  public resetDecryptionFailed() {
    this._decryptionFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionFailedInput() {
    return this._decryptionFailed;
  }

  // decryption_failed_or_bad_record_mac - computed: false, optional: true, required: false
  private _decryptionFailedOrBadRecordMac?: number; 
  public get decryptionFailedOrBadRecordMac() {
    return this.getNumberAttribute('decryption_failed_or_bad_record_mac');
  }
  public set decryptionFailedOrBadRecordMac(value: number) {
    this._decryptionFailedOrBadRecordMac = value;
  }
  public resetDecryptionFailedOrBadRecordMac() {
    this._decryptionFailedOrBadRecordMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionFailedOrBadRecordMacInput() {
    return this._decryptionFailedOrBadRecordMac;
  }

  // dh_public_value_length_is_wrong - computed: false, optional: true, required: false
  private _dhPublicValueLengthIsWrong?: number; 
  public get dhPublicValueLengthIsWrong() {
    return this.getNumberAttribute('dh_public_value_length_is_wrong');
  }
  public set dhPublicValueLengthIsWrong(value: number) {
    this._dhPublicValueLengthIsWrong = value;
  }
  public resetDhPublicValueLengthIsWrong() {
    this._dhPublicValueLengthIsWrong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhPublicValueLengthIsWrongInput() {
    return this._dhPublicValueLengthIsWrong;
  }

  // digest_check_failed - computed: false, optional: true, required: false
  private _digestCheckFailed?: number; 
  public get digestCheckFailed() {
    return this.getNumberAttribute('digest_check_failed');
  }
  public set digestCheckFailed(value: number) {
    this._digestCheckFailed = value;
  }
  public resetDigestCheckFailed() {
    this._digestCheckFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestCheckFailedInput() {
    return this._digestCheckFailed;
  }

  // encrypted_length_too_long - computed: false, optional: true, required: false
  private _encryptedLengthTooLong?: number; 
  public get encryptedLengthTooLong() {
    return this.getNumberAttribute('encrypted_length_too_long');
  }
  public set encryptedLengthTooLong(value: number) {
    this._encryptedLengthTooLong = value;
  }
  public resetEncryptedLengthTooLong() {
    this._encryptedLengthTooLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedLengthTooLongInput() {
    return this._encryptedLengthTooLong;
  }

  // error_generating_tmp_rsa_key - computed: false, optional: true, required: false
  private _errorGeneratingTmpRsaKey?: number; 
  public get errorGeneratingTmpRsaKey() {
    return this.getNumberAttribute('error_generating_tmp_rsa_key');
  }
  public set errorGeneratingTmpRsaKey(value: number) {
    this._errorGeneratingTmpRsaKey = value;
  }
  public resetErrorGeneratingTmpRsaKey() {
    this._errorGeneratingTmpRsaKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorGeneratingTmpRsaKeyInput() {
    return this._errorGeneratingTmpRsaKey;
  }

  // error_in_received_cipher_list - computed: false, optional: true, required: false
  private _errorInReceivedCipherList?: number; 
  public get errorInReceivedCipherList() {
    return this.getNumberAttribute('error_in_received_cipher_list');
  }
  public set errorInReceivedCipherList(value: number) {
    this._errorInReceivedCipherList = value;
  }
  public resetErrorInReceivedCipherList() {
    this._errorInReceivedCipherList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInReceivedCipherListInput() {
    return this._errorInReceivedCipherList;
  }

  // excessive_message_size - computed: false, optional: true, required: false
  private _excessiveMessageSize?: number; 
  public get excessiveMessageSize() {
    return this.getNumberAttribute('excessive_message_size');
  }
  public set excessiveMessageSize(value: number) {
    this._excessiveMessageSize = value;
  }
  public resetExcessiveMessageSize() {
    this._excessiveMessageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excessiveMessageSizeInput() {
    return this._excessiveMessageSize;
  }

  // extra_data_in_message - computed: false, optional: true, required: false
  private _extraDataInMessage?: number; 
  public get extraDataInMessage() {
    return this.getNumberAttribute('extra_data_in_message');
  }
  public set extraDataInMessage(value: number) {
    this._extraDataInMessage = value;
  }
  public resetExtraDataInMessage() {
    this._extraDataInMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraDataInMessageInput() {
    return this._extraDataInMessage;
  }

  // got_a_fin_before_a_ccs - computed: false, optional: true, required: false
  private _gotAFinBeforeACcs?: number; 
  public get gotAFinBeforeACcs() {
    return this.getNumberAttribute('got_a_fin_before_a_ccs');
  }
  public set gotAFinBeforeACcs(value: number) {
    this._gotAFinBeforeACcs = value;
  }
  public resetGotAFinBeforeACcs() {
    this._gotAFinBeforeACcs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gotAFinBeforeACcsInput() {
    return this._gotAFinBeforeACcs;
  }

  // http_request - computed: false, optional: true, required: false
  private _httpRequest?: number; 
  public get httpRequest() {
    return this.getNumberAttribute('http_request');
  }
  public set httpRequest(value: number) {
    this._httpRequest = value;
  }
  public resetHttpRequest() {
    this._httpRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestInput() {
    return this._httpRequest;
  }

  // https_proxy_request - computed: false, optional: true, required: false
  private _httpsProxyRequest?: number; 
  public get httpsProxyRequest() {
    return this.getNumberAttribute('https_proxy_request');
  }
  public set httpsProxyRequest(value: number) {
    this._httpsProxyRequest = value;
  }
  public resetHttpsProxyRequest() {
    this._httpsProxyRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsProxyRequestInput() {
    return this._httpsProxyRequest;
  }

  // illegal_padding - computed: false, optional: true, required: false
  private _illegalPadding?: number; 
  public get illegalPadding() {
    return this.getNumberAttribute('illegal_padding');
  }
  public set illegalPadding(value: number) {
    this._illegalPadding = value;
  }
  public resetIllegalPadding() {
    this._illegalPadding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get illegalPaddingInput() {
    return this._illegalPadding;
  }

  // inappropriate_fallback - computed: false, optional: true, required: false
  private _inappropriateFallback?: number; 
  public get inappropriateFallback() {
    return this.getNumberAttribute('inappropriate_fallback');
  }
  public set inappropriateFallback(value: number) {
    this._inappropriateFallback = value;
  }
  public resetInappropriateFallback() {
    this._inappropriateFallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inappropriateFallbackInput() {
    return this._inappropriateFallback;
  }

  // invalid_challenge_length - computed: false, optional: true, required: false
  private _invalidChallengeLength?: number; 
  public get invalidChallengeLength() {
    return this.getNumberAttribute('invalid_challenge_length');
  }
  public set invalidChallengeLength(value: number) {
    this._invalidChallengeLength = value;
  }
  public resetInvalidChallengeLength() {
    this._invalidChallengeLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidChallengeLengthInput() {
    return this._invalidChallengeLength;
  }

  // invalid_command - computed: false, optional: true, required: false
  private _invalidCommand?: number; 
  public get invalidCommand() {
    return this.getNumberAttribute('invalid_command');
  }
  public set invalidCommand(value: number) {
    this._invalidCommand = value;
  }
  public resetInvalidCommand() {
    this._invalidCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidCommandInput() {
    return this._invalidCommand;
  }

  // invalid_purpose - computed: false, optional: true, required: false
  private _invalidPurpose?: number; 
  public get invalidPurpose() {
    return this.getNumberAttribute('invalid_purpose');
  }
  public set invalidPurpose(value: number) {
    this._invalidPurpose = value;
  }
  public resetInvalidPurpose() {
    this._invalidPurpose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidPurposeInput() {
    return this._invalidPurpose;
  }

  // invalid_status_response - computed: false, optional: true, required: false
  private _invalidStatusResponse?: number; 
  public get invalidStatusResponse() {
    return this.getNumberAttribute('invalid_status_response');
  }
  public set invalidStatusResponse(value: number) {
    this._invalidStatusResponse = value;
  }
  public resetInvalidStatusResponse() {
    this._invalidStatusResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidStatusResponseInput() {
    return this._invalidStatusResponse;
  }

  // invalid_trust - computed: false, optional: true, required: false
  private _invalidTrust?: number; 
  public get invalidTrust() {
    return this.getNumberAttribute('invalid_trust');
  }
  public set invalidTrust(value: number) {
    this._invalidTrust = value;
  }
  public resetInvalidTrust() {
    this._invalidTrust = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidTrustInput() {
    return this._invalidTrust;
  }

  // key_arg_too_long - computed: false, optional: true, required: false
  private _keyArgTooLong?: number; 
  public get keyArgTooLong() {
    return this.getNumberAttribute('key_arg_too_long');
  }
  public set keyArgTooLong(value: number) {
    this._keyArgTooLong = value;
  }
  public resetKeyArgTooLong() {
    this._keyArgTooLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyArgTooLongInput() {
    return this._keyArgTooLong;
  }

  // krb5 - computed: false, optional: true, required: false
  private _krb5?: number; 
  public get krb5() {
    return this.getNumberAttribute('krb5');
  }
  public set krb5(value: number) {
    this._krb5 = value;
  }
  public resetKrb5() {
    this._krb5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krb5Input() {
    return this._krb5;
  }

  // krb5_client_cc_principal - computed: false, optional: true, required: false
  private _krb5ClientCcPrincipal?: number; 
  public get krb5ClientCcPrincipal() {
    return this.getNumberAttribute('krb5_client_cc_principal');
  }
  public set krb5ClientCcPrincipal(value: number) {
    this._krb5ClientCcPrincipal = value;
  }
  public resetKrb5ClientCcPrincipal() {
    this._krb5ClientCcPrincipal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krb5ClientCcPrincipalInput() {
    return this._krb5ClientCcPrincipal;
  }

  // krb5_client_get_cred - computed: false, optional: true, required: false
  private _krb5ClientGetCred?: number; 
  public get krb5ClientGetCred() {
    return this.getNumberAttribute('krb5_client_get_cred');
  }
  public set krb5ClientGetCred(value: number) {
    this._krb5ClientGetCred = value;
  }
  public resetKrb5ClientGetCred() {
    this._krb5ClientGetCred = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krb5ClientGetCredInput() {
    return this._krb5ClientGetCred;
  }

  // krb5_client_init - computed: false, optional: true, required: false
  private _krb5ClientInit?: number; 
  public get krb5ClientInit() {
    return this.getNumberAttribute('krb5_client_init');
  }
  public set krb5ClientInit(value: number) {
    this._krb5ClientInit = value;
  }
  public resetKrb5ClientInit() {
    this._krb5ClientInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krb5ClientInitInput() {
    return this._krb5ClientInit;
  }

  // krb5_client_mk_req - computed: false, optional: true, required: false
  private _krb5ClientMkReq?: number; 
  public get krb5ClientMkReq() {
    return this.getNumberAttribute('krb5_client_mk_req');
  }
  public set krb5ClientMkReq(value: number) {
    this._krb5ClientMkReq = value;
  }
  public resetKrb5ClientMkReq() {
    this._krb5ClientMkReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krb5ClientMkReqInput() {
    return this._krb5ClientMkReq;
  }

  // krb5_server_bad_ticket - computed: false, optional: true, required: false
  private _krb5ServerBadTicket?: number; 
  public get krb5ServerBadTicket() {
    return this.getNumberAttribute('krb5_server_bad_ticket');
  }
  public set krb5ServerBadTicket(value: number) {
    this._krb5ServerBadTicket = value;
  }
  public resetKrb5ServerBadTicket() {
    this._krb5ServerBadTicket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krb5ServerBadTicketInput() {
    return this._krb5ServerBadTicket;
  }

  // krb5_server_init - computed: false, optional: true, required: false
  private _krb5ServerInit?: number; 
  public get krb5ServerInit() {
    return this.getNumberAttribute('krb5_server_init');
  }
  public set krb5ServerInit(value: number) {
    this._krb5ServerInit = value;
  }
  public resetKrb5ServerInit() {
    this._krb5ServerInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krb5ServerInitInput() {
    return this._krb5ServerInit;
  }

  // krb5_server_rd_req - computed: false, optional: true, required: false
  private _krb5ServerRdReq?: number; 
  public get krb5ServerRdReq() {
    return this.getNumberAttribute('krb5_server_rd_req');
  }
  public set krb5ServerRdReq(value: number) {
    this._krb5ServerRdReq = value;
  }
  public resetKrb5ServerRdReq() {
    this._krb5ServerRdReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krb5ServerRdReqInput() {
    return this._krb5ServerRdReq;
  }

  // krb5_server_tkt_expired - computed: false, optional: true, required: false
  private _krb5ServerTktExpired?: number; 
  public get krb5ServerTktExpired() {
    return this.getNumberAttribute('krb5_server_tkt_expired');
  }
  public set krb5ServerTktExpired(value: number) {
    this._krb5ServerTktExpired = value;
  }
  public resetKrb5ServerTktExpired() {
    this._krb5ServerTktExpired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krb5ServerTktExpiredInput() {
    return this._krb5ServerTktExpired;
  }

  // krb5_server_tkt_not_yet_valid - computed: false, optional: true, required: false
  private _krb5ServerTktNotYetValid?: number; 
  public get krb5ServerTktNotYetValid() {
    return this.getNumberAttribute('krb5_server_tkt_not_yet_valid');
  }
  public set krb5ServerTktNotYetValid(value: number) {
    this._krb5ServerTktNotYetValid = value;
  }
  public resetKrb5ServerTktNotYetValid() {
    this._krb5ServerTktNotYetValid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krb5ServerTktNotYetValidInput() {
    return this._krb5ServerTktNotYetValid;
  }

  // krb5_server_tkt_skew - computed: false, optional: true, required: false
  private _krb5ServerTktSkew?: number; 
  public get krb5ServerTktSkew() {
    return this.getNumberAttribute('krb5_server_tkt_skew');
  }
  public set krb5ServerTktSkew(value: number) {
    this._krb5ServerTktSkew = value;
  }
  public resetKrb5ServerTktSkew() {
    this._krb5ServerTktSkew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krb5ServerTktSkewInput() {
    return this._krb5ServerTktSkew;
  }

  // length_mismatch - computed: false, optional: true, required: false
  private _lengthMismatch?: number; 
  public get lengthMismatch() {
    return this.getNumberAttribute('length_mismatch');
  }
  public set lengthMismatch(value: number) {
    this._lengthMismatch = value;
  }
  public resetLengthMismatch() {
    this._lengthMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthMismatchInput() {
    return this._lengthMismatch;
  }

  // length_too_short - computed: false, optional: true, required: false
  private _lengthTooShort?: number; 
  public get lengthTooShort() {
    return this.getNumberAttribute('length_too_short');
  }
  public set lengthTooShort(value: number) {
    this._lengthTooShort = value;
  }
  public resetLengthTooShort() {
    this._lengthTooShort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthTooShortInput() {
    return this._lengthTooShort;
  }

  // library_bug - computed: false, optional: true, required: false
  private _libraryBug?: number; 
  public get libraryBug() {
    return this.getNumberAttribute('library_bug');
  }
  public set libraryBug(value: number) {
    this._libraryBug = value;
  }
  public resetLibraryBug() {
    this._libraryBug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get libraryBugInput() {
    return this._libraryBug;
  }

  // library_has_no_ciphers - computed: false, optional: true, required: false
  private _libraryHasNoCiphers?: number; 
  public get libraryHasNoCiphers() {
    return this.getNumberAttribute('library_has_no_ciphers');
  }
  public set libraryHasNoCiphers(value: number) {
    this._libraryHasNoCiphers = value;
  }
  public resetLibraryHasNoCiphers() {
    this._libraryHasNoCiphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get libraryHasNoCiphersInput() {
    return this._libraryHasNoCiphers;
  }

  // mast_key_too_long - computed: false, optional: true, required: false
  private _mastKeyTooLong?: number; 
  public get mastKeyTooLong() {
    return this.getNumberAttribute('mast_key_too_long');
  }
  public set mastKeyTooLong(value: number) {
    this._mastKeyTooLong = value;
  }
  public resetMastKeyTooLong() {
    this._mastKeyTooLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mastKeyTooLongInput() {
    return this._mastKeyTooLong;
  }

  // message_too_long - computed: false, optional: true, required: false
  private _messageTooLong?: number; 
  public get messageTooLong() {
    return this.getNumberAttribute('message_too_long');
  }
  public set messageTooLong(value: number) {
    this._messageTooLong = value;
  }
  public resetMessageTooLong() {
    this._messageTooLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageTooLongInput() {
    return this._messageTooLong;
  }

  // missing_dh_dsa_cert - computed: false, optional: true, required: false
  private _missingDhDsaCert?: number; 
  public get missingDhDsaCert() {
    return this.getNumberAttribute('missing_dh_dsa_cert');
  }
  public set missingDhDsaCert(value: number) {
    this._missingDhDsaCert = value;
  }
  public resetMissingDhDsaCert() {
    this._missingDhDsaCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingDhDsaCertInput() {
    return this._missingDhDsaCert;
  }

  // missing_dh_key - computed: false, optional: true, required: false
  private _missingDhKey?: number; 
  public get missingDhKey() {
    return this.getNumberAttribute('missing_dh_key');
  }
  public set missingDhKey(value: number) {
    this._missingDhKey = value;
  }
  public resetMissingDhKey() {
    this._missingDhKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingDhKeyInput() {
    return this._missingDhKey;
  }

  // missing_dh_rsa_cert - computed: false, optional: true, required: false
  private _missingDhRsaCert?: number; 
  public get missingDhRsaCert() {
    return this.getNumberAttribute('missing_dh_rsa_cert');
  }
  public set missingDhRsaCert(value: number) {
    this._missingDhRsaCert = value;
  }
  public resetMissingDhRsaCert() {
    this._missingDhRsaCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingDhRsaCertInput() {
    return this._missingDhRsaCert;
  }

  // missing_dsa_signing_cert - computed: false, optional: true, required: false
  private _missingDsaSigningCert?: number; 
  public get missingDsaSigningCert() {
    return this.getNumberAttribute('missing_dsa_signing_cert');
  }
  public set missingDsaSigningCert(value: number) {
    this._missingDsaSigningCert = value;
  }
  public resetMissingDsaSigningCert() {
    this._missingDsaSigningCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingDsaSigningCertInput() {
    return this._missingDsaSigningCert;
  }

  // missing_export_tmp_dh_key - computed: false, optional: true, required: false
  private _missingExportTmpDhKey?: number; 
  public get missingExportTmpDhKey() {
    return this.getNumberAttribute('missing_export_tmp_dh_key');
  }
  public set missingExportTmpDhKey(value: number) {
    this._missingExportTmpDhKey = value;
  }
  public resetMissingExportTmpDhKey() {
    this._missingExportTmpDhKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingExportTmpDhKeyInput() {
    return this._missingExportTmpDhKey;
  }

  // missing_export_tmp_rsa_key - computed: false, optional: true, required: false
  private _missingExportTmpRsaKey?: number; 
  public get missingExportTmpRsaKey() {
    return this.getNumberAttribute('missing_export_tmp_rsa_key');
  }
  public set missingExportTmpRsaKey(value: number) {
    this._missingExportTmpRsaKey = value;
  }
  public resetMissingExportTmpRsaKey() {
    this._missingExportTmpRsaKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingExportTmpRsaKeyInput() {
    return this._missingExportTmpRsaKey;
  }

  // missing_rsa_certificate - computed: false, optional: true, required: false
  private _missingRsaCertificate?: number; 
  public get missingRsaCertificate() {
    return this.getNumberAttribute('missing_rsa_certificate');
  }
  public set missingRsaCertificate(value: number) {
    this._missingRsaCertificate = value;
  }
  public resetMissingRsaCertificate() {
    this._missingRsaCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingRsaCertificateInput() {
    return this._missingRsaCertificate;
  }

  // missing_rsa_encrypting_cert - computed: false, optional: true, required: false
  private _missingRsaEncryptingCert?: number; 
  public get missingRsaEncryptingCert() {
    return this.getNumberAttribute('missing_rsa_encrypting_cert');
  }
  public set missingRsaEncryptingCert(value: number) {
    this._missingRsaEncryptingCert = value;
  }
  public resetMissingRsaEncryptingCert() {
    this._missingRsaEncryptingCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingRsaEncryptingCertInput() {
    return this._missingRsaEncryptingCert;
  }

  // missing_rsa_signing_cert - computed: false, optional: true, required: false
  private _missingRsaSigningCert?: number; 
  public get missingRsaSigningCert() {
    return this.getNumberAttribute('missing_rsa_signing_cert');
  }
  public set missingRsaSigningCert(value: number) {
    this._missingRsaSigningCert = value;
  }
  public resetMissingRsaSigningCert() {
    this._missingRsaSigningCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingRsaSigningCertInput() {
    return this._missingRsaSigningCert;
  }

  // missing_tmp_dh_key - computed: false, optional: true, required: false
  private _missingTmpDhKey?: number; 
  public get missingTmpDhKey() {
    return this.getNumberAttribute('missing_tmp_dh_key');
  }
  public set missingTmpDhKey(value: number) {
    this._missingTmpDhKey = value;
  }
  public resetMissingTmpDhKey() {
    this._missingTmpDhKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingTmpDhKeyInput() {
    return this._missingTmpDhKey;
  }

  // missing_tmp_rsa_key - computed: false, optional: true, required: false
  private _missingTmpRsaKey?: number; 
  public get missingTmpRsaKey() {
    return this.getNumberAttribute('missing_tmp_rsa_key');
  }
  public set missingTmpRsaKey(value: number) {
    this._missingTmpRsaKey = value;
  }
  public resetMissingTmpRsaKey() {
    this._missingTmpRsaKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingTmpRsaKeyInput() {
    return this._missingTmpRsaKey;
  }

  // missing_tmp_rsa_pkey - computed: false, optional: true, required: false
  private _missingTmpRsaPkey?: number; 
  public get missingTmpRsaPkey() {
    return this.getNumberAttribute('missing_tmp_rsa_pkey');
  }
  public set missingTmpRsaPkey(value: number) {
    this._missingTmpRsaPkey = value;
  }
  public resetMissingTmpRsaPkey() {
    this._missingTmpRsaPkey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingTmpRsaPkeyInput() {
    return this._missingTmpRsaPkey;
  }

  // missing_verify_message - computed: false, optional: true, required: false
  private _missingVerifyMessage?: number; 
  public get missingVerifyMessage() {
    return this.getNumberAttribute('missing_verify_message');
  }
  public set missingVerifyMessage(value: number) {
    this._missingVerifyMessage = value;
  }
  public resetMissingVerifyMessage() {
    this._missingVerifyMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingVerifyMessageInput() {
    return this._missingVerifyMessage;
  }

  // multiple_sgc_restarts - computed: false, optional: true, required: false
  private _multipleSgcRestarts?: number; 
  public get multipleSgcRestarts() {
    return this.getNumberAttribute('multiple_sgc_restarts');
  }
  public set multipleSgcRestarts(value: number) {
    this._multipleSgcRestarts = value;
  }
  public resetMultipleSgcRestarts() {
    this._multipleSgcRestarts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleSgcRestartsInput() {
    return this._multipleSgcRestarts;
  }

  // no_certificate_assigned - computed: false, optional: true, required: false
  private _noCertificateAssigned?: number; 
  public get noCertificateAssigned() {
    return this.getNumberAttribute('no_certificate_assigned');
  }
  public set noCertificateAssigned(value: number) {
    this._noCertificateAssigned = value;
  }
  public resetNoCertificateAssigned() {
    this._noCertificateAssigned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCertificateAssignedInput() {
    return this._noCertificateAssigned;
  }

  // no_certificate_returned - computed: false, optional: true, required: false
  private _noCertificateReturned?: number; 
  public get noCertificateReturned() {
    return this.getNumberAttribute('no_certificate_returned');
  }
  public set noCertificateReturned(value: number) {
    this._noCertificateReturned = value;
  }
  public resetNoCertificateReturned() {
    this._noCertificateReturned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCertificateReturnedInput() {
    return this._noCertificateReturned;
  }

  // no_certificate_set - computed: false, optional: true, required: false
  private _noCertificateSet?: number; 
  public get noCertificateSet() {
    return this.getNumberAttribute('no_certificate_set');
  }
  public set noCertificateSet(value: number) {
    this._noCertificateSet = value;
  }
  public resetNoCertificateSet() {
    this._noCertificateSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCertificateSetInput() {
    return this._noCertificateSet;
  }

  // no_certificate_specified - computed: false, optional: true, required: false
  private _noCertificateSpecified?: number; 
  public get noCertificateSpecified() {
    return this.getNumberAttribute('no_certificate_specified');
  }
  public set noCertificateSpecified(value: number) {
    this._noCertificateSpecified = value;
  }
  public resetNoCertificateSpecified() {
    this._noCertificateSpecified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCertificateSpecifiedInput() {
    return this._noCertificateSpecified;
  }

  // no_certificates_returned - computed: false, optional: true, required: false
  private _noCertificatesReturned?: number; 
  public get noCertificatesReturned() {
    return this.getNumberAttribute('no_certificates_returned');
  }
  public set noCertificatesReturned(value: number) {
    this._noCertificatesReturned = value;
  }
  public resetNoCertificatesReturned() {
    this._noCertificatesReturned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCertificatesReturnedInput() {
    return this._noCertificatesReturned;
  }

  // no_cipher_list - computed: false, optional: true, required: false
  private _noCipherList?: number; 
  public get noCipherList() {
    return this.getNumberAttribute('no_cipher_list');
  }
  public set noCipherList(value: number) {
    this._noCipherList = value;
  }
  public resetNoCipherList() {
    this._noCipherList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCipherListInput() {
    return this._noCipherList;
  }

  // no_cipher_match - computed: false, optional: true, required: false
  private _noCipherMatch?: number; 
  public get noCipherMatch() {
    return this.getNumberAttribute('no_cipher_match');
  }
  public set noCipherMatch(value: number) {
    this._noCipherMatch = value;
  }
  public resetNoCipherMatch() {
    this._noCipherMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCipherMatchInput() {
    return this._noCipherMatch;
  }

  // no_ciphers_available - computed: false, optional: true, required: false
  private _noCiphersAvailable?: number; 
  public get noCiphersAvailable() {
    return this.getNumberAttribute('no_ciphers_available');
  }
  public set noCiphersAvailable(value: number) {
    this._noCiphersAvailable = value;
  }
  public resetNoCiphersAvailable() {
    this._noCiphersAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCiphersAvailableInput() {
    return this._noCiphersAvailable;
  }

  // no_ciphers_passed - computed: false, optional: true, required: false
  private _noCiphersPassed?: number; 
  public get noCiphersPassed() {
    return this.getNumberAttribute('no_ciphers_passed');
  }
  public set noCiphersPassed(value: number) {
    this._noCiphersPassed = value;
  }
  public resetNoCiphersPassed() {
    this._noCiphersPassed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCiphersPassedInput() {
    return this._noCiphersPassed;
  }

  // no_ciphers_specified - computed: false, optional: true, required: false
  private _noCiphersSpecified?: number; 
  public get noCiphersSpecified() {
    return this.getNumberAttribute('no_ciphers_specified');
  }
  public set noCiphersSpecified(value: number) {
    this._noCiphersSpecified = value;
  }
  public resetNoCiphersSpecified() {
    this._noCiphersSpecified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCiphersSpecifiedInput() {
    return this._noCiphersSpecified;
  }

  // no_client_cert_received - computed: false, optional: true, required: false
  private _noClientCertReceived?: number; 
  public get noClientCertReceived() {
    return this.getNumberAttribute('no_client_cert_received');
  }
  public set noClientCertReceived(value: number) {
    this._noClientCertReceived = value;
  }
  public resetNoClientCertReceived() {
    this._noClientCertReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noClientCertReceivedInput() {
    return this._noClientCertReceived;
  }

  // no_compression_specified - computed: false, optional: true, required: false
  private _noCompressionSpecified?: number; 
  public get noCompressionSpecified() {
    return this.getNumberAttribute('no_compression_specified');
  }
  public set noCompressionSpecified(value: number) {
    this._noCompressionSpecified = value;
  }
  public resetNoCompressionSpecified() {
    this._noCompressionSpecified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCompressionSpecifiedInput() {
    return this._noCompressionSpecified;
  }

  // no_method_specified - computed: false, optional: true, required: false
  private _noMethodSpecified?: number; 
  public get noMethodSpecified() {
    return this.getNumberAttribute('no_method_specified');
  }
  public set noMethodSpecified(value: number) {
    this._noMethodSpecified = value;
  }
  public resetNoMethodSpecified() {
    this._noMethodSpecified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noMethodSpecifiedInput() {
    return this._noMethodSpecified;
  }

  // no_private_key_assigned - computed: false, optional: true, required: false
  private _noPrivateKeyAssigned?: number; 
  public get noPrivateKeyAssigned() {
    return this.getNumberAttribute('no_private_key_assigned');
  }
  public set noPrivateKeyAssigned(value: number) {
    this._noPrivateKeyAssigned = value;
  }
  public resetNoPrivateKeyAssigned() {
    this._noPrivateKeyAssigned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noPrivateKeyAssignedInput() {
    return this._noPrivateKeyAssigned;
  }

  // no_privatekey - computed: false, optional: true, required: false
  private _noPrivatekey?: number; 
  public get noPrivatekey() {
    return this.getNumberAttribute('no_privatekey');
  }
  public set noPrivatekey(value: number) {
    this._noPrivatekey = value;
  }
  public resetNoPrivatekey() {
    this._noPrivatekey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noPrivatekeyInput() {
    return this._noPrivatekey;
  }

  // no_protocols_available - computed: false, optional: true, required: false
  private _noProtocolsAvailable?: number; 
  public get noProtocolsAvailable() {
    return this.getNumberAttribute('no_protocols_available');
  }
  public set noProtocolsAvailable(value: number) {
    this._noProtocolsAvailable = value;
  }
  public resetNoProtocolsAvailable() {
    this._noProtocolsAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noProtocolsAvailableInput() {
    return this._noProtocolsAvailable;
  }

  // no_publickey - computed: false, optional: true, required: false
  private _noPublickey?: number; 
  public get noPublickey() {
    return this.getNumberAttribute('no_publickey');
  }
  public set noPublickey(value: number) {
    this._noPublickey = value;
  }
  public resetNoPublickey() {
    this._noPublickey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noPublickeyInput() {
    return this._noPublickey;
  }

  // no_required_digest - computed: false, optional: true, required: false
  private _noRequiredDigest?: number; 
  public get noRequiredDigest() {
    return this.getNumberAttribute('no_required_digest');
  }
  public set noRequiredDigest(value: number) {
    this._noRequiredDigest = value;
  }
  public resetNoRequiredDigest() {
    this._noRequiredDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRequiredDigestInput() {
    return this._noRequiredDigest;
  }

  // no_shared_cipher - computed: false, optional: true, required: false
  private _noSharedCipher?: number; 
  public get noSharedCipher() {
    return this.getNumberAttribute('no_shared_cipher');
  }
  public set noSharedCipher(value: number) {
    this._noSharedCipher = value;
  }
  public resetNoSharedCipher() {
    this._noSharedCipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSharedCipherInput() {
    return this._noSharedCipher;
  }

  // no_verify_callback - computed: false, optional: true, required: false
  private _noVerifyCallback?: number; 
  public get noVerifyCallback() {
    return this.getNumberAttribute('no_verify_callback');
  }
  public set noVerifyCallback(value: number) {
    this._noVerifyCallback = value;
  }
  public resetNoVerifyCallback() {
    this._noVerifyCallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noVerifyCallbackInput() {
    return this._noVerifyCallback;
  }

  // non_sslv2_initial_packet - computed: false, optional: true, required: false
  private _nonSslv2InitialPacket?: number; 
  public get nonSslv2InitialPacket() {
    return this.getNumberAttribute('non_sslv2_initial_packet');
  }
  public set nonSslv2InitialPacket(value: number) {
    this._nonSslv2InitialPacket = value;
  }
  public resetNonSslv2InitialPacket() {
    this._nonSslv2InitialPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonSslv2InitialPacketInput() {
    return this._nonSslv2InitialPacket;
  }

  // null_ssl_ctx - computed: false, optional: true, required: false
  private _nullSslCtx?: number; 
  public get nullSslCtx() {
    return this.getNumberAttribute('null_ssl_ctx');
  }
  public set nullSslCtx(value: number) {
    this._nullSslCtx = value;
  }
  public resetNullSslCtx() {
    this._nullSslCtx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullSslCtxInput() {
    return this._nullSslCtx;
  }

  // null_ssl_method_passed - computed: false, optional: true, required: false
  private _nullSslMethodPassed?: number; 
  public get nullSslMethodPassed() {
    return this.getNumberAttribute('null_ssl_method_passed');
  }
  public set nullSslMethodPassed(value: number) {
    this._nullSslMethodPassed = value;
  }
  public resetNullSslMethodPassed() {
    this._nullSslMethodPassed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullSslMethodPassedInput() {
    return this._nullSslMethodPassed;
  }

  // old_session_cipher_not_returned - computed: false, optional: true, required: false
  private _oldSessionCipherNotReturned?: number; 
  public get oldSessionCipherNotReturned() {
    return this.getNumberAttribute('old_session_cipher_not_returned');
  }
  public set oldSessionCipherNotReturned(value: number) {
    this._oldSessionCipherNotReturned = value;
  }
  public resetOldSessionCipherNotReturned() {
    this._oldSessionCipherNotReturned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldSessionCipherNotReturnedInput() {
    return this._oldSessionCipherNotReturned;
  }

  // packet_length_too_long - computed: false, optional: true, required: false
  private _packetLengthTooLong?: number; 
  public get packetLengthTooLong() {
    return this.getNumberAttribute('packet_length_too_long');
  }
  public set packetLengthTooLong(value: number) {
    this._packetLengthTooLong = value;
  }
  public resetPacketLengthTooLong() {
    this._packetLengthTooLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetLengthTooLongInput() {
    return this._packetLengthTooLong;
  }

  // parse_tlsext - computed: false, optional: true, required: false
  private _parseTlsext?: number; 
  public get parseTlsext() {
    return this.getNumberAttribute('parse_tlsext');
  }
  public set parseTlsext(value: number) {
    this._parseTlsext = value;
  }
  public resetParseTlsext() {
    this._parseTlsext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseTlsextInput() {
    return this._parseTlsext;
  }

  // path_too_long - computed: false, optional: true, required: false
  private _pathTooLong?: number; 
  public get pathTooLong() {
    return this.getNumberAttribute('path_too_long');
  }
  public set pathTooLong(value: number) {
    this._pathTooLong = value;
  }
  public resetPathTooLong() {
    this._pathTooLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathTooLongInput() {
    return this._pathTooLong;
  }

  // peer_did_not_return_a_certificate - computed: false, optional: true, required: false
  private _peerDidNotReturnACertificate?: number; 
  public get peerDidNotReturnACertificate() {
    return this.getNumberAttribute('peer_did_not_return_a_certificate');
  }
  public set peerDidNotReturnACertificate(value: number) {
    this._peerDidNotReturnACertificate = value;
  }
  public resetPeerDidNotReturnACertificate() {
    this._peerDidNotReturnACertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerDidNotReturnACertificateInput() {
    return this._peerDidNotReturnACertificate;
  }

  // peer_error - computed: false, optional: true, required: false
  private _peerError?: number; 
  public get peerError() {
    return this.getNumberAttribute('peer_error');
  }
  public set peerError(value: number) {
    this._peerError = value;
  }
  public resetPeerError() {
    this._peerError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerErrorInput() {
    return this._peerError;
  }

  // peer_error_certificate - computed: false, optional: true, required: false
  private _peerErrorCertificate?: number; 
  public get peerErrorCertificate() {
    return this.getNumberAttribute('peer_error_certificate');
  }
  public set peerErrorCertificate(value: number) {
    this._peerErrorCertificate = value;
  }
  public resetPeerErrorCertificate() {
    this._peerErrorCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerErrorCertificateInput() {
    return this._peerErrorCertificate;
  }

  // peer_error_no_certificate - computed: false, optional: true, required: false
  private _peerErrorNoCertificate?: number; 
  public get peerErrorNoCertificate() {
    return this.getNumberAttribute('peer_error_no_certificate');
  }
  public set peerErrorNoCertificate(value: number) {
    this._peerErrorNoCertificate = value;
  }
  public resetPeerErrorNoCertificate() {
    this._peerErrorNoCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerErrorNoCertificateInput() {
    return this._peerErrorNoCertificate;
  }

  // peer_error_no_cipher - computed: false, optional: true, required: false
  private _peerErrorNoCipher?: number; 
  public get peerErrorNoCipher() {
    return this.getNumberAttribute('peer_error_no_cipher');
  }
  public set peerErrorNoCipher(value: number) {
    this._peerErrorNoCipher = value;
  }
  public resetPeerErrorNoCipher() {
    this._peerErrorNoCipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerErrorNoCipherInput() {
    return this._peerErrorNoCipher;
  }

  // peer_error_unsupported_certificate_type - computed: false, optional: true, required: false
  private _peerErrorUnsupportedCertificateType?: number; 
  public get peerErrorUnsupportedCertificateType() {
    return this.getNumberAttribute('peer_error_unsupported_certificate_type');
  }
  public set peerErrorUnsupportedCertificateType(value: number) {
    this._peerErrorUnsupportedCertificateType = value;
  }
  public resetPeerErrorUnsupportedCertificateType() {
    this._peerErrorUnsupportedCertificateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerErrorUnsupportedCertificateTypeInput() {
    return this._peerErrorUnsupportedCertificateType;
  }

  // pre_mac_length_too_long - computed: false, optional: true, required: false
  private _preMacLengthTooLong?: number; 
  public get preMacLengthTooLong() {
    return this.getNumberAttribute('pre_mac_length_too_long');
  }
  public set preMacLengthTooLong(value: number) {
    this._preMacLengthTooLong = value;
  }
  public resetPreMacLengthTooLong() {
    this._preMacLengthTooLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preMacLengthTooLongInput() {
    return this._preMacLengthTooLong;
  }

  // problems_mapping_cipher_functions - computed: false, optional: true, required: false
  private _problemsMappingCipherFunctions?: number; 
  public get problemsMappingCipherFunctions() {
    return this.getNumberAttribute('problems_mapping_cipher_functions');
  }
  public set problemsMappingCipherFunctions(value: number) {
    this._problemsMappingCipherFunctions = value;
  }
  public resetProblemsMappingCipherFunctions() {
    this._problemsMappingCipherFunctions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get problemsMappingCipherFunctionsInput() {
    return this._problemsMappingCipherFunctions;
  }

  // protocol_is_shutdown - computed: false, optional: true, required: false
  private _protocolIsShutdown?: number; 
  public get protocolIsShutdown() {
    return this.getNumberAttribute('protocol_is_shutdown');
  }
  public set protocolIsShutdown(value: number) {
    this._protocolIsShutdown = value;
  }
  public resetProtocolIsShutdown() {
    this._protocolIsShutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolIsShutdownInput() {
    return this._protocolIsShutdown;
  }

  // public_key_encrypt_error - computed: false, optional: true, required: false
  private _publicKeyEncryptError?: number; 
  public get publicKeyEncryptError() {
    return this.getNumberAttribute('public_key_encrypt_error');
  }
  public set publicKeyEncryptError(value: number) {
    this._publicKeyEncryptError = value;
  }
  public resetPublicKeyEncryptError() {
    this._publicKeyEncryptError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyEncryptErrorInput() {
    return this._publicKeyEncryptError;
  }

  // public_key_is_not_rsa - computed: false, optional: true, required: false
  private _publicKeyIsNotRsa?: number; 
  public get publicKeyIsNotRsa() {
    return this.getNumberAttribute('public_key_is_not_rsa');
  }
  public set publicKeyIsNotRsa(value: number) {
    this._publicKeyIsNotRsa = value;
  }
  public resetPublicKeyIsNotRsa() {
    this._publicKeyIsNotRsa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyIsNotRsaInput() {
    return this._publicKeyIsNotRsa;
  }

  // public_key_not_rsa - computed: false, optional: true, required: false
  private _publicKeyNotRsa?: number; 
  public get publicKeyNotRsa() {
    return this.getNumberAttribute('public_key_not_rsa');
  }
  public set publicKeyNotRsa(value: number) {
    this._publicKeyNotRsa = value;
  }
  public resetPublicKeyNotRsa() {
    this._publicKeyNotRsa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyNotRsaInput() {
    return this._publicKeyNotRsa;
  }

  // read_bio_not_set - computed: false, optional: true, required: false
  private _readBioNotSet?: number; 
  public get readBioNotSet() {
    return this.getNumberAttribute('read_bio_not_set');
  }
  public set readBioNotSet(value: number) {
    this._readBioNotSet = value;
  }
  public resetReadBioNotSet() {
    this._readBioNotSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readBioNotSetInput() {
    return this._readBioNotSet;
  }

  // read_wrong_packet_type - computed: false, optional: true, required: false
  private _readWrongPacketType?: number; 
  public get readWrongPacketType() {
    return this.getNumberAttribute('read_wrong_packet_type');
  }
  public set readWrongPacketType(value: number) {
    this._readWrongPacketType = value;
  }
  public resetReadWrongPacketType() {
    this._readWrongPacketType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readWrongPacketTypeInput() {
    return this._readWrongPacketType;
  }

  // record_length_mismatch - computed: false, optional: true, required: false
  private _recordLengthMismatch?: number; 
  public get recordLengthMismatch() {
    return this.getNumberAttribute('record_length_mismatch');
  }
  public set recordLengthMismatch(value: number) {
    this._recordLengthMismatch = value;
  }
  public resetRecordLengthMismatch() {
    this._recordLengthMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordLengthMismatchInput() {
    return this._recordLengthMismatch;
  }

  // record_too_large - computed: false, optional: true, required: false
  private _recordTooLarge?: number; 
  public get recordTooLarge() {
    return this.getNumberAttribute('record_too_large');
  }
  public set recordTooLarge(value: number) {
    this._recordTooLarge = value;
  }
  public resetRecordTooLarge() {
    this._recordTooLarge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTooLargeInput() {
    return this._recordTooLarge;
  }

  // record_too_small - computed: false, optional: true, required: false
  private _recordTooSmall?: number; 
  public get recordTooSmall() {
    return this.getNumberAttribute('record_too_small');
  }
  public set recordTooSmall(value: number) {
    this._recordTooSmall = value;
  }
  public resetRecordTooSmall() {
    this._recordTooSmall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTooSmallInput() {
    return this._recordTooSmall;
  }

  // required_cipher_missing - computed: false, optional: true, required: false
  private _requiredCipherMissing?: number; 
  public get requiredCipherMissing() {
    return this.getNumberAttribute('required_cipher_missing');
  }
  public set requiredCipherMissing(value: number) {
    this._requiredCipherMissing = value;
  }
  public resetRequiredCipherMissing() {
    this._requiredCipherMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredCipherMissingInput() {
    return this._requiredCipherMissing;
  }

  // reuse_cert_length_not_zero - computed: false, optional: true, required: false
  private _reuseCertLengthNotZero?: number; 
  public get reuseCertLengthNotZero() {
    return this.getNumberAttribute('reuse_cert_length_not_zero');
  }
  public set reuseCertLengthNotZero(value: number) {
    this._reuseCertLengthNotZero = value;
  }
  public resetReuseCertLengthNotZero() {
    this._reuseCertLengthNotZero = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reuseCertLengthNotZeroInput() {
    return this._reuseCertLengthNotZero;
  }

  // reuse_cert_type_not_zero - computed: false, optional: true, required: false
  private _reuseCertTypeNotZero?: number; 
  public get reuseCertTypeNotZero() {
    return this.getNumberAttribute('reuse_cert_type_not_zero');
  }
  public set reuseCertTypeNotZero(value: number) {
    this._reuseCertTypeNotZero = value;
  }
  public resetReuseCertTypeNotZero() {
    this._reuseCertTypeNotZero = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reuseCertTypeNotZeroInput() {
    return this._reuseCertTypeNotZero;
  }

  // reuse_cipher_list_not_zero - computed: false, optional: true, required: false
  private _reuseCipherListNotZero?: number; 
  public get reuseCipherListNotZero() {
    return this.getNumberAttribute('reuse_cipher_list_not_zero');
  }
  public set reuseCipherListNotZero(value: number) {
    this._reuseCipherListNotZero = value;
  }
  public resetReuseCipherListNotZero() {
    this._reuseCipherListNotZero = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reuseCipherListNotZeroInput() {
    return this._reuseCipherListNotZero;
  }

  // scsv_received_when_renegotiating - computed: false, optional: true, required: false
  private _scsvReceivedWhenRenegotiating?: number; 
  public get scsvReceivedWhenRenegotiating() {
    return this.getNumberAttribute('scsv_received_when_renegotiating');
  }
  public set scsvReceivedWhenRenegotiating(value: number) {
    this._scsvReceivedWhenRenegotiating = value;
  }
  public resetScsvReceivedWhenRenegotiating() {
    this._scsvReceivedWhenRenegotiating = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scsvReceivedWhenRenegotiatingInput() {
    return this._scsvReceivedWhenRenegotiating;
  }

  // serverhello_tlsext - computed: false, optional: true, required: false
  private _serverhelloTlsext?: number; 
  public get serverhelloTlsext() {
    return this.getNumberAttribute('serverhello_tlsext');
  }
  public set serverhelloTlsext(value: number) {
    this._serverhelloTlsext = value;
  }
  public resetServerhelloTlsext() {
    this._serverhelloTlsext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverhelloTlsextInput() {
    return this._serverhelloTlsext;
  }

  // session_id_context_uninitialized - computed: false, optional: true, required: false
  private _sessionIdContextUninitialized?: number; 
  public get sessionIdContextUninitialized() {
    return this.getNumberAttribute('session_id_context_uninitialized');
  }
  public set sessionIdContextUninitialized(value: number) {
    this._sessionIdContextUninitialized = value;
  }
  public resetSessionIdContextUninitialized() {
    this._sessionIdContextUninitialized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionIdContextUninitializedInput() {
    return this._sessionIdContextUninitialized;
  }

  // short_read - computed: false, optional: true, required: false
  private _shortRead?: number; 
  public get shortRead() {
    return this.getNumberAttribute('short_read');
  }
  public set shortRead(value: number) {
    this._shortRead = value;
  }
  public resetShortRead() {
    this._shortRead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortReadInput() {
    return this._shortRead;
  }

  // signature_for_non_signing_certificate - computed: false, optional: true, required: false
  private _signatureForNonSigningCertificate?: number; 
  public get signatureForNonSigningCertificate() {
    return this.getNumberAttribute('signature_for_non_signing_certificate');
  }
  public set signatureForNonSigningCertificate(value: number) {
    this._signatureForNonSigningCertificate = value;
  }
  public resetSignatureForNonSigningCertificate() {
    this._signatureForNonSigningCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureForNonSigningCertificateInput() {
    return this._signatureForNonSigningCertificate;
  }

  // ssl23_doing_session_id_reuse - computed: false, optional: true, required: false
  private _ssl23DoingSessionIdReuse?: number; 
  public get ssl23DoingSessionIdReuse() {
    return this.getNumberAttribute('ssl23_doing_session_id_reuse');
  }
  public set ssl23DoingSessionIdReuse(value: number) {
    this._ssl23DoingSessionIdReuse = value;
  }
  public resetSsl23DoingSessionIdReuse() {
    this._ssl23DoingSessionIdReuse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssl23DoingSessionIdReuseInput() {
    return this._ssl23DoingSessionIdReuse;
  }

  // ssl2_connection_id_too_long - computed: false, optional: true, required: false
  private _ssl2ConnectionIdTooLong?: number; 
  public get ssl2ConnectionIdTooLong() {
    return this.getNumberAttribute('ssl2_connection_id_too_long');
  }
  public set ssl2ConnectionIdTooLong(value: number) {
    this._ssl2ConnectionIdTooLong = value;
  }
  public resetSsl2ConnectionIdTooLong() {
    this._ssl2ConnectionIdTooLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssl2ConnectionIdTooLongInput() {
    return this._ssl2ConnectionIdTooLong;
  }

  // ssl3_ext_invalid_servername - computed: false, optional: true, required: false
  private _ssl3ExtInvalidServername?: number; 
  public get ssl3ExtInvalidServername() {
    return this.getNumberAttribute('ssl3_ext_invalid_servername');
  }
  public set ssl3ExtInvalidServername(value: number) {
    this._ssl3ExtInvalidServername = value;
  }
  public resetSsl3ExtInvalidServername() {
    this._ssl3ExtInvalidServername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssl3ExtInvalidServernameInput() {
    return this._ssl3ExtInvalidServername;
  }

  // ssl3_ext_invalid_servername_type - computed: false, optional: true, required: false
  private _ssl3ExtInvalidServernameType?: number; 
  public get ssl3ExtInvalidServernameType() {
    return this.getNumberAttribute('ssl3_ext_invalid_servername_type');
  }
  public set ssl3ExtInvalidServernameType(value: number) {
    this._ssl3ExtInvalidServernameType = value;
  }
  public resetSsl3ExtInvalidServernameType() {
    this._ssl3ExtInvalidServernameType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssl3ExtInvalidServernameTypeInput() {
    return this._ssl3ExtInvalidServernameType;
  }

  // ssl3_session_id_too_long - computed: false, optional: true, required: false
  private _ssl3SessionIdTooLong?: number; 
  public get ssl3SessionIdTooLong() {
    return this.getNumberAttribute('ssl3_session_id_too_long');
  }
  public set ssl3SessionIdTooLong(value: number) {
    this._ssl3SessionIdTooLong = value;
  }
  public resetSsl3SessionIdTooLong() {
    this._ssl3SessionIdTooLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssl3SessionIdTooLongInput() {
    return this._ssl3SessionIdTooLong;
  }

  // ssl3_session_id_too_short - computed: false, optional: true, required: false
  private _ssl3SessionIdTooShort?: number; 
  public get ssl3SessionIdTooShort() {
    return this.getNumberAttribute('ssl3_session_id_too_short');
  }
  public set ssl3SessionIdTooShort(value: number) {
    this._ssl3SessionIdTooShort = value;
  }
  public resetSsl3SessionIdTooShort() {
    this._ssl3SessionIdTooShort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssl3SessionIdTooShortInput() {
    return this._ssl3SessionIdTooShort;
  }

  // ssl_ctx_has_no_default_ssl_version - computed: false, optional: true, required: false
  private _sslCtxHasNoDefaultSslVersion?: number; 
  public get sslCtxHasNoDefaultSslVersion() {
    return this.getNumberAttribute('ssl_ctx_has_no_default_ssl_version');
  }
  public set sslCtxHasNoDefaultSslVersion(value: number) {
    this._sslCtxHasNoDefaultSslVersion = value;
  }
  public resetSslCtxHasNoDefaultSslVersion() {
    this._sslCtxHasNoDefaultSslVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCtxHasNoDefaultSslVersionInput() {
    return this._sslCtxHasNoDefaultSslVersion;
  }

  // ssl_handshake_failure - computed: false, optional: true, required: false
  private _sslHandshakeFailure?: number; 
  public get sslHandshakeFailure() {
    return this.getNumberAttribute('ssl_handshake_failure');
  }
  public set sslHandshakeFailure(value: number) {
    this._sslHandshakeFailure = value;
  }
  public resetSslHandshakeFailure() {
    this._sslHandshakeFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslHandshakeFailureInput() {
    return this._sslHandshakeFailure;
  }

  // ssl_library_has_no_ciphers - computed: false, optional: true, required: false
  private _sslLibraryHasNoCiphers?: number; 
  public get sslLibraryHasNoCiphers() {
    return this.getNumberAttribute('ssl_library_has_no_ciphers');
  }
  public set sslLibraryHasNoCiphers(value: number) {
    this._sslLibraryHasNoCiphers = value;
  }
  public resetSslLibraryHasNoCiphers() {
    this._sslLibraryHasNoCiphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslLibraryHasNoCiphersInput() {
    return this._sslLibraryHasNoCiphers;
  }

  // ssl_session_id_callback_failed - computed: false, optional: true, required: false
  private _sslSessionIdCallbackFailed?: number; 
  public get sslSessionIdCallbackFailed() {
    return this.getNumberAttribute('ssl_session_id_callback_failed');
  }
  public set sslSessionIdCallbackFailed(value: number) {
    this._sslSessionIdCallbackFailed = value;
  }
  public resetSslSessionIdCallbackFailed() {
    this._sslSessionIdCallbackFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSessionIdCallbackFailedInput() {
    return this._sslSessionIdCallbackFailed;
  }

  // ssl_session_id_conflict - computed: false, optional: true, required: false
  private _sslSessionIdConflict?: number; 
  public get sslSessionIdConflict() {
    return this.getNumberAttribute('ssl_session_id_conflict');
  }
  public set sslSessionIdConflict(value: number) {
    this._sslSessionIdConflict = value;
  }
  public resetSslSessionIdConflict() {
    this._sslSessionIdConflict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSessionIdConflictInput() {
    return this._sslSessionIdConflict;
  }

  // ssl_session_id_context_too_long - computed: false, optional: true, required: false
  private _sslSessionIdContextTooLong?: number; 
  public get sslSessionIdContextTooLong() {
    return this.getNumberAttribute('ssl_session_id_context_too_long');
  }
  public set sslSessionIdContextTooLong(value: number) {
    this._sslSessionIdContextTooLong = value;
  }
  public resetSslSessionIdContextTooLong() {
    this._sslSessionIdContextTooLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSessionIdContextTooLongInput() {
    return this._sslSessionIdContextTooLong;
  }

  // ssl_session_id_has_bad_length - computed: false, optional: true, required: false
  private _sslSessionIdHasBadLength?: number; 
  public get sslSessionIdHasBadLength() {
    return this.getNumberAttribute('ssl_session_id_has_bad_length');
  }
  public set sslSessionIdHasBadLength(value: number) {
    this._sslSessionIdHasBadLength = value;
  }
  public resetSslSessionIdHasBadLength() {
    this._sslSessionIdHasBadLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSessionIdHasBadLengthInput() {
    return this._sslSessionIdHasBadLength;
  }

  // ssl_session_id_is_different - computed: false, optional: true, required: false
  private _sslSessionIdIsDifferent?: number; 
  public get sslSessionIdIsDifferent() {
    return this.getNumberAttribute('ssl_session_id_is_different');
  }
  public set sslSessionIdIsDifferent(value: number) {
    this._sslSessionIdIsDifferent = value;
  }
  public resetSslSessionIdIsDifferent() {
    this._sslSessionIdIsDifferent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSessionIdIsDifferentInput() {
    return this._sslSessionIdIsDifferent;
  }

  // sslv3_alert_bad_certificate - computed: false, optional: true, required: false
  private _sslv3AlertBadCertificate?: number; 
  public get sslv3AlertBadCertificate() {
    return this.getNumberAttribute('sslv3_alert_bad_certificate');
  }
  public set sslv3AlertBadCertificate(value: number) {
    this._sslv3AlertBadCertificate = value;
  }
  public resetSslv3AlertBadCertificate() {
    this._sslv3AlertBadCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslv3AlertBadCertificateInput() {
    return this._sslv3AlertBadCertificate;
  }

  // sslv3_alert_bad_record_mac - computed: false, optional: true, required: false
  private _sslv3AlertBadRecordMac?: number; 
  public get sslv3AlertBadRecordMac() {
    return this.getNumberAttribute('sslv3_alert_bad_record_mac');
  }
  public set sslv3AlertBadRecordMac(value: number) {
    this._sslv3AlertBadRecordMac = value;
  }
  public resetSslv3AlertBadRecordMac() {
    this._sslv3AlertBadRecordMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslv3AlertBadRecordMacInput() {
    return this._sslv3AlertBadRecordMac;
  }

  // sslv3_alert_certificate_expired - computed: false, optional: true, required: false
  private _sslv3AlertCertificateExpired?: number; 
  public get sslv3AlertCertificateExpired() {
    return this.getNumberAttribute('sslv3_alert_certificate_expired');
  }
  public set sslv3AlertCertificateExpired(value: number) {
    this._sslv3AlertCertificateExpired = value;
  }
  public resetSslv3AlertCertificateExpired() {
    this._sslv3AlertCertificateExpired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslv3AlertCertificateExpiredInput() {
    return this._sslv3AlertCertificateExpired;
  }

  // sslv3_alert_certificate_revoked - computed: false, optional: true, required: false
  private _sslv3AlertCertificateRevoked?: number; 
  public get sslv3AlertCertificateRevoked() {
    return this.getNumberAttribute('sslv3_alert_certificate_revoked');
  }
  public set sslv3AlertCertificateRevoked(value: number) {
    this._sslv3AlertCertificateRevoked = value;
  }
  public resetSslv3AlertCertificateRevoked() {
    this._sslv3AlertCertificateRevoked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslv3AlertCertificateRevokedInput() {
    return this._sslv3AlertCertificateRevoked;
  }

  // sslv3_alert_certificate_unknown - computed: false, optional: true, required: false
  private _sslv3AlertCertificateUnknown?: number; 
  public get sslv3AlertCertificateUnknown() {
    return this.getNumberAttribute('sslv3_alert_certificate_unknown');
  }
  public set sslv3AlertCertificateUnknown(value: number) {
    this._sslv3AlertCertificateUnknown = value;
  }
  public resetSslv3AlertCertificateUnknown() {
    this._sslv3AlertCertificateUnknown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslv3AlertCertificateUnknownInput() {
    return this._sslv3AlertCertificateUnknown;
  }

  // sslv3_alert_decompression_failure - computed: false, optional: true, required: false
  private _sslv3AlertDecompressionFailure?: number; 
  public get sslv3AlertDecompressionFailure() {
    return this.getNumberAttribute('sslv3_alert_decompression_failure');
  }
  public set sslv3AlertDecompressionFailure(value: number) {
    this._sslv3AlertDecompressionFailure = value;
  }
  public resetSslv3AlertDecompressionFailure() {
    this._sslv3AlertDecompressionFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslv3AlertDecompressionFailureInput() {
    return this._sslv3AlertDecompressionFailure;
  }

  // sslv3_alert_handshake_failure - computed: false, optional: true, required: false
  private _sslv3AlertHandshakeFailure?: number; 
  public get sslv3AlertHandshakeFailure() {
    return this.getNumberAttribute('sslv3_alert_handshake_failure');
  }
  public set sslv3AlertHandshakeFailure(value: number) {
    this._sslv3AlertHandshakeFailure = value;
  }
  public resetSslv3AlertHandshakeFailure() {
    this._sslv3AlertHandshakeFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslv3AlertHandshakeFailureInput() {
    return this._sslv3AlertHandshakeFailure;
  }

  // sslv3_alert_illegal_parameter - computed: false, optional: true, required: false
  private _sslv3AlertIllegalParameter?: number; 
  public get sslv3AlertIllegalParameter() {
    return this.getNumberAttribute('sslv3_alert_illegal_parameter');
  }
  public set sslv3AlertIllegalParameter(value: number) {
    this._sslv3AlertIllegalParameter = value;
  }
  public resetSslv3AlertIllegalParameter() {
    this._sslv3AlertIllegalParameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslv3AlertIllegalParameterInput() {
    return this._sslv3AlertIllegalParameter;
  }

  // sslv3_alert_no_certificate - computed: false, optional: true, required: false
  private _sslv3AlertNoCertificate?: number; 
  public get sslv3AlertNoCertificate() {
    return this.getNumberAttribute('sslv3_alert_no_certificate');
  }
  public set sslv3AlertNoCertificate(value: number) {
    this._sslv3AlertNoCertificate = value;
  }
  public resetSslv3AlertNoCertificate() {
    this._sslv3AlertNoCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslv3AlertNoCertificateInput() {
    return this._sslv3AlertNoCertificate;
  }

  // sslv3_alert_peer_error_cert - computed: false, optional: true, required: false
  private _sslv3AlertPeerErrorCert?: number; 
  public get sslv3AlertPeerErrorCert() {
    return this.getNumberAttribute('sslv3_alert_peer_error_cert');
  }
  public set sslv3AlertPeerErrorCert(value: number) {
    this._sslv3AlertPeerErrorCert = value;
  }
  public resetSslv3AlertPeerErrorCert() {
    this._sslv3AlertPeerErrorCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslv3AlertPeerErrorCertInput() {
    return this._sslv3AlertPeerErrorCert;
  }

  // sslv3_alert_peer_error_no_cert - computed: false, optional: true, required: false
  private _sslv3AlertPeerErrorNoCert?: number; 
  public get sslv3AlertPeerErrorNoCert() {
    return this.getNumberAttribute('sslv3_alert_peer_error_no_cert');
  }
  public set sslv3AlertPeerErrorNoCert(value: number) {
    this._sslv3AlertPeerErrorNoCert = value;
  }
  public resetSslv3AlertPeerErrorNoCert() {
    this._sslv3AlertPeerErrorNoCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslv3AlertPeerErrorNoCertInput() {
    return this._sslv3AlertPeerErrorNoCert;
  }

  // sslv3_alert_peer_error_no_cipher - computed: false, optional: true, required: false
  private _sslv3AlertPeerErrorNoCipher?: number; 
  public get sslv3AlertPeerErrorNoCipher() {
    return this.getNumberAttribute('sslv3_alert_peer_error_no_cipher');
  }
  public set sslv3AlertPeerErrorNoCipher(value: number) {
    this._sslv3AlertPeerErrorNoCipher = value;
  }
  public resetSslv3AlertPeerErrorNoCipher() {
    this._sslv3AlertPeerErrorNoCipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslv3AlertPeerErrorNoCipherInput() {
    return this._sslv3AlertPeerErrorNoCipher;
  }

  // sslv3_alert_peer_error_unsupp_cert_type - computed: false, optional: true, required: false
  private _sslv3AlertPeerErrorUnsuppCertType?: number; 
  public get sslv3AlertPeerErrorUnsuppCertType() {
    return this.getNumberAttribute('sslv3_alert_peer_error_unsupp_cert_type');
  }
  public set sslv3AlertPeerErrorUnsuppCertType(value: number) {
    this._sslv3AlertPeerErrorUnsuppCertType = value;
  }
  public resetSslv3AlertPeerErrorUnsuppCertType() {
    this._sslv3AlertPeerErrorUnsuppCertType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslv3AlertPeerErrorUnsuppCertTypeInput() {
    return this._sslv3AlertPeerErrorUnsuppCertType;
  }

  // sslv3_alert_unexpected_msg - computed: false, optional: true, required: false
  private _sslv3AlertUnexpectedMsg?: number; 
  public get sslv3AlertUnexpectedMsg() {
    return this.getNumberAttribute('sslv3_alert_unexpected_msg');
  }
  public set sslv3AlertUnexpectedMsg(value: number) {
    this._sslv3AlertUnexpectedMsg = value;
  }
  public resetSslv3AlertUnexpectedMsg() {
    this._sslv3AlertUnexpectedMsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslv3AlertUnexpectedMsgInput() {
    return this._sslv3AlertUnexpectedMsg;
  }

  // sslv3_alert_unknown_remote_err_type - computed: false, optional: true, required: false
  private _sslv3AlertUnknownRemoteErrType?: number; 
  public get sslv3AlertUnknownRemoteErrType() {
    return this.getNumberAttribute('sslv3_alert_unknown_remote_err_type');
  }
  public set sslv3AlertUnknownRemoteErrType(value: number) {
    this._sslv3AlertUnknownRemoteErrType = value;
  }
  public resetSslv3AlertUnknownRemoteErrType() {
    this._sslv3AlertUnknownRemoteErrType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslv3AlertUnknownRemoteErrTypeInput() {
    return this._sslv3AlertUnknownRemoteErrType;
  }

  // sslv3_alert_unspported_cert - computed: false, optional: true, required: false
  private _sslv3AlertUnspportedCert?: number; 
  public get sslv3AlertUnspportedCert() {
    return this.getNumberAttribute('sslv3_alert_unspported_cert');
  }
  public set sslv3AlertUnspportedCert(value: number) {
    this._sslv3AlertUnspportedCert = value;
  }
  public resetSslv3AlertUnspportedCert() {
    this._sslv3AlertUnspportedCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslv3AlertUnspportedCertInput() {
    return this._sslv3AlertUnspportedCert;
  }

  // tls_client_cert_req_with_anon_cipher - computed: false, optional: true, required: false
  private _tlsClientCertReqWithAnonCipher?: number; 
  public get tlsClientCertReqWithAnonCipher() {
    return this.getNumberAttribute('tls_client_cert_req_with_anon_cipher');
  }
  public set tlsClientCertReqWithAnonCipher(value: number) {
    this._tlsClientCertReqWithAnonCipher = value;
  }
  public resetTlsClientCertReqWithAnonCipher() {
    this._tlsClientCertReqWithAnonCipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsClientCertReqWithAnonCipherInput() {
    return this._tlsClientCertReqWithAnonCipher;
  }

  // tls_invalid_ecpointformat_list - computed: false, optional: true, required: false
  private _tlsInvalidEcpointformatList?: number; 
  public get tlsInvalidEcpointformatList() {
    return this.getNumberAttribute('tls_invalid_ecpointformat_list');
  }
  public set tlsInvalidEcpointformatList(value: number) {
    this._tlsInvalidEcpointformatList = value;
  }
  public resetTlsInvalidEcpointformatList() {
    this._tlsInvalidEcpointformatList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInvalidEcpointformatListInput() {
    return this._tlsInvalidEcpointformatList;
  }

  // tls_peer_did_not_respond_with_cert_list - computed: false, optional: true, required: false
  private _tlsPeerDidNotRespondWithCertList?: number; 
  public get tlsPeerDidNotRespondWithCertList() {
    return this.getNumberAttribute('tls_peer_did_not_respond_with_cert_list');
  }
  public set tlsPeerDidNotRespondWithCertList(value: number) {
    this._tlsPeerDidNotRespondWithCertList = value;
  }
  public resetTlsPeerDidNotRespondWithCertList() {
    this._tlsPeerDidNotRespondWithCertList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsPeerDidNotRespondWithCertListInput() {
    return this._tlsPeerDidNotRespondWithCertList;
  }

  // tls_rsa_encrypted_value_length_is_wrong - computed: false, optional: true, required: false
  private _tlsRsaEncryptedValueLengthIsWrong?: number; 
  public get tlsRsaEncryptedValueLengthIsWrong() {
    return this.getNumberAttribute('tls_rsa_encrypted_value_length_is_wrong');
  }
  public set tlsRsaEncryptedValueLengthIsWrong(value: number) {
    this._tlsRsaEncryptedValueLengthIsWrong = value;
  }
  public resetTlsRsaEncryptedValueLengthIsWrong() {
    this._tlsRsaEncryptedValueLengthIsWrong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsRsaEncryptedValueLengthIsWrongInput() {
    return this._tlsRsaEncryptedValueLengthIsWrong;
  }

  // tlsv1_alert_access_denied - computed: false, optional: true, required: false
  private _tlsv1AlertAccessDenied?: number; 
  public get tlsv1AlertAccessDenied() {
    return this.getNumberAttribute('tlsv1_alert_access_denied');
  }
  public set tlsv1AlertAccessDenied(value: number) {
    this._tlsv1AlertAccessDenied = value;
  }
  public resetTlsv1AlertAccessDenied() {
    this._tlsv1AlertAccessDenied = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsv1AlertAccessDeniedInput() {
    return this._tlsv1AlertAccessDenied;
  }

  // tlsv1_alert_decode_error - computed: false, optional: true, required: false
  private _tlsv1AlertDecodeError?: number; 
  public get tlsv1AlertDecodeError() {
    return this.getNumberAttribute('tlsv1_alert_decode_error');
  }
  public set tlsv1AlertDecodeError(value: number) {
    this._tlsv1AlertDecodeError = value;
  }
  public resetTlsv1AlertDecodeError() {
    this._tlsv1AlertDecodeError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsv1AlertDecodeErrorInput() {
    return this._tlsv1AlertDecodeError;
  }

  // tlsv1_alert_decrypt_error - computed: false, optional: true, required: false
  private _tlsv1AlertDecryptError?: number; 
  public get tlsv1AlertDecryptError() {
    return this.getNumberAttribute('tlsv1_alert_decrypt_error');
  }
  public set tlsv1AlertDecryptError(value: number) {
    this._tlsv1AlertDecryptError = value;
  }
  public resetTlsv1AlertDecryptError() {
    this._tlsv1AlertDecryptError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsv1AlertDecryptErrorInput() {
    return this._tlsv1AlertDecryptError;
  }

  // tlsv1_alert_decryption_failed - computed: false, optional: true, required: false
  private _tlsv1AlertDecryptionFailed?: number; 
  public get tlsv1AlertDecryptionFailed() {
    return this.getNumberAttribute('tlsv1_alert_decryption_failed');
  }
  public set tlsv1AlertDecryptionFailed(value: number) {
    this._tlsv1AlertDecryptionFailed = value;
  }
  public resetTlsv1AlertDecryptionFailed() {
    this._tlsv1AlertDecryptionFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsv1AlertDecryptionFailedInput() {
    return this._tlsv1AlertDecryptionFailed;
  }

  // tlsv1_alert_export_restriction - computed: false, optional: true, required: false
  private _tlsv1AlertExportRestriction?: number; 
  public get tlsv1AlertExportRestriction() {
    return this.getNumberAttribute('tlsv1_alert_export_restriction');
  }
  public set tlsv1AlertExportRestriction(value: number) {
    this._tlsv1AlertExportRestriction = value;
  }
  public resetTlsv1AlertExportRestriction() {
    this._tlsv1AlertExportRestriction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsv1AlertExportRestrictionInput() {
    return this._tlsv1AlertExportRestriction;
  }

  // tlsv1_alert_insufficient_security - computed: false, optional: true, required: false
  private _tlsv1AlertInsufficientSecurity?: number; 
  public get tlsv1AlertInsufficientSecurity() {
    return this.getNumberAttribute('tlsv1_alert_insufficient_security');
  }
  public set tlsv1AlertInsufficientSecurity(value: number) {
    this._tlsv1AlertInsufficientSecurity = value;
  }
  public resetTlsv1AlertInsufficientSecurity() {
    this._tlsv1AlertInsufficientSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsv1AlertInsufficientSecurityInput() {
    return this._tlsv1AlertInsufficientSecurity;
  }

  // tlsv1_alert_internal_error - computed: false, optional: true, required: false
  private _tlsv1AlertInternalError?: number; 
  public get tlsv1AlertInternalError() {
    return this.getNumberAttribute('tlsv1_alert_internal_error');
  }
  public set tlsv1AlertInternalError(value: number) {
    this._tlsv1AlertInternalError = value;
  }
  public resetTlsv1AlertInternalError() {
    this._tlsv1AlertInternalError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsv1AlertInternalErrorInput() {
    return this._tlsv1AlertInternalError;
  }

  // tlsv1_alert_no_renegotiation - computed: false, optional: true, required: false
  private _tlsv1AlertNoRenegotiation?: number; 
  public get tlsv1AlertNoRenegotiation() {
    return this.getNumberAttribute('tlsv1_alert_no_renegotiation');
  }
  public set tlsv1AlertNoRenegotiation(value: number) {
    this._tlsv1AlertNoRenegotiation = value;
  }
  public resetTlsv1AlertNoRenegotiation() {
    this._tlsv1AlertNoRenegotiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsv1AlertNoRenegotiationInput() {
    return this._tlsv1AlertNoRenegotiation;
  }

  // tlsv1_alert_protocol_version - computed: false, optional: true, required: false
  private _tlsv1AlertProtocolVersion?: number; 
  public get tlsv1AlertProtocolVersion() {
    return this.getNumberAttribute('tlsv1_alert_protocol_version');
  }
  public set tlsv1AlertProtocolVersion(value: number) {
    this._tlsv1AlertProtocolVersion = value;
  }
  public resetTlsv1AlertProtocolVersion() {
    this._tlsv1AlertProtocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsv1AlertProtocolVersionInput() {
    return this._tlsv1AlertProtocolVersion;
  }

  // tlsv1_alert_record_overflow - computed: false, optional: true, required: false
  private _tlsv1AlertRecordOverflow?: number; 
  public get tlsv1AlertRecordOverflow() {
    return this.getNumberAttribute('tlsv1_alert_record_overflow');
  }
  public set tlsv1AlertRecordOverflow(value: number) {
    this._tlsv1AlertRecordOverflow = value;
  }
  public resetTlsv1AlertRecordOverflow() {
    this._tlsv1AlertRecordOverflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsv1AlertRecordOverflowInput() {
    return this._tlsv1AlertRecordOverflow;
  }

  // tlsv1_alert_unknown_ca - computed: false, optional: true, required: false
  private _tlsv1AlertUnknownCa?: number; 
  public get tlsv1AlertUnknownCa() {
    return this.getNumberAttribute('tlsv1_alert_unknown_ca');
  }
  public set tlsv1AlertUnknownCa(value: number) {
    this._tlsv1AlertUnknownCa = value;
  }
  public resetTlsv1AlertUnknownCa() {
    this._tlsv1AlertUnknownCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsv1AlertUnknownCaInput() {
    return this._tlsv1AlertUnknownCa;
  }

  // tlsv1_alert_user_cancelled - computed: false, optional: true, required: false
  private _tlsv1AlertUserCancelled?: number; 
  public get tlsv1AlertUserCancelled() {
    return this.getNumberAttribute('tlsv1_alert_user_cancelled');
  }
  public set tlsv1AlertUserCancelled(value: number) {
    this._tlsv1AlertUserCancelled = value;
  }
  public resetTlsv1AlertUserCancelled() {
    this._tlsv1AlertUserCancelled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsv1AlertUserCancelledInput() {
    return this._tlsv1AlertUserCancelled;
  }

  // tried_to_use_unsupported_cipher - computed: false, optional: true, required: false
  private _triedToUseUnsupportedCipher?: number; 
  public get triedToUseUnsupportedCipher() {
    return this.getNumberAttribute('tried_to_use_unsupported_cipher');
  }
  public set triedToUseUnsupportedCipher(value: number) {
    this._triedToUseUnsupportedCipher = value;
  }
  public resetTriedToUseUnsupportedCipher() {
    this._triedToUseUnsupportedCipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triedToUseUnsupportedCipherInput() {
    return this._triedToUseUnsupportedCipher;
  }

  // unable_to_decode_dh_certs - computed: false, optional: true, required: false
  private _unableToDecodeDhCerts?: number; 
  public get unableToDecodeDhCerts() {
    return this.getNumberAttribute('unable_to_decode_dh_certs');
  }
  public set unableToDecodeDhCerts(value: number) {
    this._unableToDecodeDhCerts = value;
  }
  public resetUnableToDecodeDhCerts() {
    this._unableToDecodeDhCerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unableToDecodeDhCertsInput() {
    return this._unableToDecodeDhCerts;
  }

  // unable_to_extract_public_key - computed: false, optional: true, required: false
  private _unableToExtractPublicKey?: number; 
  public get unableToExtractPublicKey() {
    return this.getNumberAttribute('unable_to_extract_public_key');
  }
  public set unableToExtractPublicKey(value: number) {
    this._unableToExtractPublicKey = value;
  }
  public resetUnableToExtractPublicKey() {
    this._unableToExtractPublicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unableToExtractPublicKeyInput() {
    return this._unableToExtractPublicKey;
  }

  // unable_to_find_dh_parameters - computed: false, optional: true, required: false
  private _unableToFindDhParameters?: number; 
  public get unableToFindDhParameters() {
    return this.getNumberAttribute('unable_to_find_dh_parameters');
  }
  public set unableToFindDhParameters(value: number) {
    this._unableToFindDhParameters = value;
  }
  public resetUnableToFindDhParameters() {
    this._unableToFindDhParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unableToFindDhParametersInput() {
    return this._unableToFindDhParameters;
  }

  // unable_to_find_public_key_parameters - computed: false, optional: true, required: false
  private _unableToFindPublicKeyParameters?: number; 
  public get unableToFindPublicKeyParameters() {
    return this.getNumberAttribute('unable_to_find_public_key_parameters');
  }
  public set unableToFindPublicKeyParameters(value: number) {
    this._unableToFindPublicKeyParameters = value;
  }
  public resetUnableToFindPublicKeyParameters() {
    this._unableToFindPublicKeyParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unableToFindPublicKeyParametersInput() {
    return this._unableToFindPublicKeyParameters;
  }

  // unable_to_find_ssl_method - computed: false, optional: true, required: false
  private _unableToFindSslMethod?: number; 
  public get unableToFindSslMethod() {
    return this.getNumberAttribute('unable_to_find_ssl_method');
  }
  public set unableToFindSslMethod(value: number) {
    this._unableToFindSslMethod = value;
  }
  public resetUnableToFindSslMethod() {
    this._unableToFindSslMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unableToFindSslMethodInput() {
    return this._unableToFindSslMethod;
  }

  // unable_to_load_ssl2_md5_routines - computed: false, optional: true, required: false
  private _unableToLoadSsl2Md5Routines?: number; 
  public get unableToLoadSsl2Md5Routines() {
    return this.getNumberAttribute('unable_to_load_ssl2_md5_routines');
  }
  public set unableToLoadSsl2Md5Routines(value: number) {
    this._unableToLoadSsl2Md5Routines = value;
  }
  public resetUnableToLoadSsl2Md5Routines() {
    this._unableToLoadSsl2Md5Routines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unableToLoadSsl2Md5RoutinesInput() {
    return this._unableToLoadSsl2Md5Routines;
  }

  // unable_to_load_ssl3_md5_routines - computed: false, optional: true, required: false
  private _unableToLoadSsl3Md5Routines?: number; 
  public get unableToLoadSsl3Md5Routines() {
    return this.getNumberAttribute('unable_to_load_ssl3_md5_routines');
  }
  public set unableToLoadSsl3Md5Routines(value: number) {
    this._unableToLoadSsl3Md5Routines = value;
  }
  public resetUnableToLoadSsl3Md5Routines() {
    this._unableToLoadSsl3Md5Routines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unableToLoadSsl3Md5RoutinesInput() {
    return this._unableToLoadSsl3Md5Routines;
  }

  // unable_to_load_ssl3_sha1_routines - computed: false, optional: true, required: false
  private _unableToLoadSsl3Sha1Routines?: number; 
  public get unableToLoadSsl3Sha1Routines() {
    return this.getNumberAttribute('unable_to_load_ssl3_sha1_routines');
  }
  public set unableToLoadSsl3Sha1Routines(value: number) {
    this._unableToLoadSsl3Sha1Routines = value;
  }
  public resetUnableToLoadSsl3Sha1Routines() {
    this._unableToLoadSsl3Sha1Routines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unableToLoadSsl3Sha1RoutinesInput() {
    return this._unableToLoadSsl3Sha1Routines;
  }

  // unexpected_message - computed: false, optional: true, required: false
  private _unexpectedMessage?: number; 
  public get unexpectedMessage() {
    return this.getNumberAttribute('unexpected_message');
  }
  public set unexpectedMessage(value: number) {
    this._unexpectedMessage = value;
  }
  public resetUnexpectedMessage() {
    this._unexpectedMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unexpectedMessageInput() {
    return this._unexpectedMessage;
  }

  // unexpected_record - computed: false, optional: true, required: false
  private _unexpectedRecord?: number; 
  public get unexpectedRecord() {
    return this.getNumberAttribute('unexpected_record');
  }
  public set unexpectedRecord(value: number) {
    this._unexpectedRecord = value;
  }
  public resetUnexpectedRecord() {
    this._unexpectedRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unexpectedRecordInput() {
    return this._unexpectedRecord;
  }

  // uninitialized - computed: false, optional: true, required: false
  private _uninitialized?: number; 
  public get uninitialized() {
    return this.getNumberAttribute('uninitialized');
  }
  public set uninitialized(value: number) {
    this._uninitialized = value;
  }
  public resetUninitialized() {
    this._uninitialized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uninitializedInput() {
    return this._uninitialized;
  }

  // unknown_alert_type - computed: false, optional: true, required: false
  private _unknownAlertType?: number; 
  public get unknownAlertType() {
    return this.getNumberAttribute('unknown_alert_type');
  }
  public set unknownAlertType(value: number) {
    this._unknownAlertType = value;
  }
  public resetUnknownAlertType() {
    this._unknownAlertType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownAlertTypeInput() {
    return this._unknownAlertType;
  }

  // unknown_certificate_type - computed: false, optional: true, required: false
  private _unknownCertificateType?: number; 
  public get unknownCertificateType() {
    return this.getNumberAttribute('unknown_certificate_type');
  }
  public set unknownCertificateType(value: number) {
    this._unknownCertificateType = value;
  }
  public resetUnknownCertificateType() {
    this._unknownCertificateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownCertificateTypeInput() {
    return this._unknownCertificateType;
  }

  // unknown_cipher_returned - computed: false, optional: true, required: false
  private _unknownCipherReturned?: number; 
  public get unknownCipherReturned() {
    return this.getNumberAttribute('unknown_cipher_returned');
  }
  public set unknownCipherReturned(value: number) {
    this._unknownCipherReturned = value;
  }
  public resetUnknownCipherReturned() {
    this._unknownCipherReturned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownCipherReturnedInput() {
    return this._unknownCipherReturned;
  }

  // unknown_cipher_type - computed: false, optional: true, required: false
  private _unknownCipherType?: number; 
  public get unknownCipherType() {
    return this.getNumberAttribute('unknown_cipher_type');
  }
  public set unknownCipherType(value: number) {
    this._unknownCipherType = value;
  }
  public resetUnknownCipherType() {
    this._unknownCipherType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownCipherTypeInput() {
    return this._unknownCipherType;
  }

  // unknown_key_exchange_type - computed: false, optional: true, required: false
  private _unknownKeyExchangeType?: number; 
  public get unknownKeyExchangeType() {
    return this.getNumberAttribute('unknown_key_exchange_type');
  }
  public set unknownKeyExchangeType(value: number) {
    this._unknownKeyExchangeType = value;
  }
  public resetUnknownKeyExchangeType() {
    this._unknownKeyExchangeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownKeyExchangeTypeInput() {
    return this._unknownKeyExchangeType;
  }

  // unknown_pkey_type - computed: false, optional: true, required: false
  private _unknownPkeyType?: number; 
  public get unknownPkeyType() {
    return this.getNumberAttribute('unknown_pkey_type');
  }
  public set unknownPkeyType(value: number) {
    this._unknownPkeyType = value;
  }
  public resetUnknownPkeyType() {
    this._unknownPkeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownPkeyTypeInput() {
    return this._unknownPkeyType;
  }

  // unknown_protocol - computed: false, optional: true, required: false
  private _unknownProtocol?: number; 
  public get unknownProtocol() {
    return this.getNumberAttribute('unknown_protocol');
  }
  public set unknownProtocol(value: number) {
    this._unknownProtocol = value;
  }
  public resetUnknownProtocol() {
    this._unknownProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownProtocolInput() {
    return this._unknownProtocol;
  }

  // unknown_remote_error_type - computed: false, optional: true, required: false
  private _unknownRemoteErrorType?: number; 
  public get unknownRemoteErrorType() {
    return this.getNumberAttribute('unknown_remote_error_type');
  }
  public set unknownRemoteErrorType(value: number) {
    this._unknownRemoteErrorType = value;
  }
  public resetUnknownRemoteErrorType() {
    this._unknownRemoteErrorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownRemoteErrorTypeInput() {
    return this._unknownRemoteErrorType;
  }

  // unknown_ssl_version - computed: false, optional: true, required: false
  private _unknownSslVersion?: number; 
  public get unknownSslVersion() {
    return this.getNumberAttribute('unknown_ssl_version');
  }
  public set unknownSslVersion(value: number) {
    this._unknownSslVersion = value;
  }
  public resetUnknownSslVersion() {
    this._unknownSslVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownSslVersionInput() {
    return this._unknownSslVersion;
  }

  // unknown_state - computed: false, optional: true, required: false
  private _unknownState?: number; 
  public get unknownState() {
    return this.getNumberAttribute('unknown_state');
  }
  public set unknownState(value: number) {
    this._unknownState = value;
  }
  public resetUnknownState() {
    this._unknownState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownStateInput() {
    return this._unknownState;
  }

  // unsupported_cipher - computed: false, optional: true, required: false
  private _unsupportedCipher?: number; 
  public get unsupportedCipher() {
    return this.getNumberAttribute('unsupported_cipher');
  }
  public set unsupportedCipher(value: number) {
    this._unsupportedCipher = value;
  }
  public resetUnsupportedCipher() {
    this._unsupportedCipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedCipherInput() {
    return this._unsupportedCipher;
  }

  // unsupported_compression_algorithm - computed: false, optional: true, required: false
  private _unsupportedCompressionAlgorithm?: number; 
  public get unsupportedCompressionAlgorithm() {
    return this.getNumberAttribute('unsupported_compression_algorithm');
  }
  public set unsupportedCompressionAlgorithm(value: number) {
    this._unsupportedCompressionAlgorithm = value;
  }
  public resetUnsupportedCompressionAlgorithm() {
    this._unsupportedCompressionAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedCompressionAlgorithmInput() {
    return this._unsupportedCompressionAlgorithm;
  }

  // unsupported_digest_type - computed: false, optional: true, required: false
  private _unsupportedDigestType?: number; 
  public get unsupportedDigestType() {
    return this.getNumberAttribute('unsupported_digest_type');
  }
  public set unsupportedDigestType(value: number) {
    this._unsupportedDigestType = value;
  }
  public resetUnsupportedDigestType() {
    this._unsupportedDigestType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedDigestTypeInput() {
    return this._unsupportedDigestType;
  }

  // unsupported_elliptic_curve - computed: false, optional: true, required: false
  private _unsupportedEllipticCurve?: number; 
  public get unsupportedEllipticCurve() {
    return this.getNumberAttribute('unsupported_elliptic_curve');
  }
  public set unsupportedEllipticCurve(value: number) {
    this._unsupportedEllipticCurve = value;
  }
  public resetUnsupportedEllipticCurve() {
    this._unsupportedEllipticCurve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedEllipticCurveInput() {
    return this._unsupportedEllipticCurve;
  }

  // unsupported_option - computed: false, optional: true, required: false
  private _unsupportedOption?: number; 
  public get unsupportedOption() {
    return this.getNumberAttribute('unsupported_option');
  }
  public set unsupportedOption(value: number) {
    this._unsupportedOption = value;
  }
  public resetUnsupportedOption() {
    this._unsupportedOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedOptionInput() {
    return this._unsupportedOption;
  }

  // unsupported_protocol - computed: false, optional: true, required: false
  private _unsupportedProtocol?: number; 
  public get unsupportedProtocol() {
    return this.getNumberAttribute('unsupported_protocol');
  }
  public set unsupportedProtocol(value: number) {
    this._unsupportedProtocol = value;
  }
  public resetUnsupportedProtocol() {
    this._unsupportedProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedProtocolInput() {
    return this._unsupportedProtocol;
  }

  // unsupported_ssl_version - computed: false, optional: true, required: false
  private _unsupportedSslVersion?: number; 
  public get unsupportedSslVersion() {
    return this.getNumberAttribute('unsupported_ssl_version');
  }
  public set unsupportedSslVersion(value: number) {
    this._unsupportedSslVersion = value;
  }
  public resetUnsupportedSslVersion() {
    this._unsupportedSslVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedSslVersionInput() {
    return this._unsupportedSslVersion;
  }

  // unsupported_status_type - computed: false, optional: true, required: false
  private _unsupportedStatusType?: number; 
  public get unsupportedStatusType() {
    return this.getNumberAttribute('unsupported_status_type');
  }
  public set unsupportedStatusType(value: number) {
    this._unsupportedStatusType = value;
  }
  public resetUnsupportedStatusType() {
    this._unsupportedStatusType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedStatusTypeInput() {
    return this._unsupportedStatusType;
  }

  // write_bio_not_set - computed: false, optional: true, required: false
  private _writeBioNotSet?: number; 
  public get writeBioNotSet() {
    return this.getNumberAttribute('write_bio_not_set');
  }
  public set writeBioNotSet(value: number) {
    this._writeBioNotSet = value;
  }
  public resetWriteBioNotSet() {
    this._writeBioNotSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeBioNotSetInput() {
    return this._writeBioNotSet;
  }

  // wrong_cipher_returned - computed: false, optional: true, required: false
  private _wrongCipherReturned?: number; 
  public get wrongCipherReturned() {
    return this.getNumberAttribute('wrong_cipher_returned');
  }
  public set wrongCipherReturned(value: number) {
    this._wrongCipherReturned = value;
  }
  public resetWrongCipherReturned() {
    this._wrongCipherReturned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wrongCipherReturnedInput() {
    return this._wrongCipherReturned;
  }

  // wrong_message_type - computed: false, optional: true, required: false
  private _wrongMessageType?: number; 
  public get wrongMessageType() {
    return this.getNumberAttribute('wrong_message_type');
  }
  public set wrongMessageType(value: number) {
    this._wrongMessageType = value;
  }
  public resetWrongMessageType() {
    this._wrongMessageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wrongMessageTypeInput() {
    return this._wrongMessageType;
  }

  // wrong_number_of_key_bits - computed: false, optional: true, required: false
  private _wrongNumberOfKeyBits?: number; 
  public get wrongNumberOfKeyBits() {
    return this.getNumberAttribute('wrong_number_of_key_bits');
  }
  public set wrongNumberOfKeyBits(value: number) {
    this._wrongNumberOfKeyBits = value;
  }
  public resetWrongNumberOfKeyBits() {
    this._wrongNumberOfKeyBits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wrongNumberOfKeyBitsInput() {
    return this._wrongNumberOfKeyBits;
  }

  // wrong_signature_length - computed: false, optional: true, required: false
  private _wrongSignatureLength?: number; 
  public get wrongSignatureLength() {
    return this.getNumberAttribute('wrong_signature_length');
  }
  public set wrongSignatureLength(value: number) {
    this._wrongSignatureLength = value;
  }
  public resetWrongSignatureLength() {
    this._wrongSignatureLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wrongSignatureLengthInput() {
    return this._wrongSignatureLength;
  }

  // wrong_signature_size - computed: false, optional: true, required: false
  private _wrongSignatureSize?: number; 
  public get wrongSignatureSize() {
    return this.getNumberAttribute('wrong_signature_size');
  }
  public set wrongSignatureSize(value: number) {
    this._wrongSignatureSize = value;
  }
  public resetWrongSignatureSize() {
    this._wrongSignatureSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wrongSignatureSizeInput() {
    return this._wrongSignatureSize;
  }

  // wrong_ssl_version - computed: false, optional: true, required: false
  private _wrongSslVersion?: number; 
  public get wrongSslVersion() {
    return this.getNumberAttribute('wrong_ssl_version');
  }
  public set wrongSslVersion(value: number) {
    this._wrongSslVersion = value;
  }
  public resetWrongSslVersion() {
    this._wrongSslVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wrongSslVersionInput() {
    return this._wrongSslVersion;
  }

  // wrong_version_number - computed: false, optional: true, required: false
  private _wrongVersionNumber?: number; 
  public get wrongVersionNumber() {
    return this.getNumberAttribute('wrong_version_number');
  }
  public set wrongVersionNumber(value: number) {
    this._wrongVersionNumber = value;
  }
  public resetWrongVersionNumber() {
    this._wrongVersionNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wrongVersionNumberInput() {
    return this._wrongVersionNumber;
  }

  // x509_lib - computed: false, optional: true, required: false
  private _x509Lib?: number; 
  public get x509Lib() {
    return this.getNumberAttribute('x509_lib');
  }
  public set x509Lib(value: number) {
    this._x509Lib = value;
  }
  public resetX509Lib() {
    this._x509Lib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get x509LibInput() {
    return this._x509Lib;
  }

  // x509_verification_setup_problems - computed: false, optional: true, required: false
  private _x509VerificationSetupProblems?: number; 
  public get x509VerificationSetupProblems() {
    return this.getNumberAttribute('x509_verification_setup_problems');
  }
  public set x509VerificationSetupProblems(value: number) {
    this._x509VerificationSetupProblems = value;
  }
  public resetX509VerificationSetupProblems() {
    this._x509VerificationSetupProblems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get x509VerificationSetupProblemsInput() {
    return this._x509VerificationSetupProblems;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper thunder_slb_ssl_error_oper}
*/
export class DataThunderSlbSslErrorOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_ssl_error_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbSslErrorOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbSslErrorOper to import
  * @param importFromId The id of the existing DataThunderSlbSslErrorOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbSslErrorOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_ssl_error_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_error_oper thunder_slb_ssl_error_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbSslErrorOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbSslErrorOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_ssl_error_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._oper.internalValue = config.oper;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderSlbSslErrorOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbSslErrorOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderSlbSslErrorOperOperToTerraform(this._oper.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oper: {
        value: dataThunderSlbSslErrorOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbSslErrorOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
