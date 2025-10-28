// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzer2_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogFortianalyzer2SettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzer2_setting#__change_ip LogFortianalyzer2Setting#__change_ip}
  */
  readonly changeIp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzer2_setting#access_config LogFortianalyzer2Setting#access_config}
  */
  readonly accessConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzer2_setting#alt_server LogFortianalyzer2Setting#alt_server}
  */
  readonly altServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzer2_setting#certificate LogFortianalyzer2Setting#certificate}
  */
  readonly certificate?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzer2_setting#certificate_verification LogFortianalyzer2Setting#certificate_verification}
  */
  readonly certificateVerification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzer2_setting#conn_timeout LogFortianalyzer2Setting#conn_timeout}
  */
  readonly connTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzer2_setting#device_name LogFortianalyzer2Setting#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzer2_setting#enc_algorithm LogFortianalyzer2Setting#enc_algorithm}
  */
  readonly encAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzer2_setting#fallback_to_primary LogFortianalyzer2Setting#fallback_to_primary}
  */
  readonly fallbackToPrimary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzer2_setting#hmac_algorithm LogFortianalyzer2Setting#hmac_algorithm}
  */
  readonly hmacAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzer2_setting#id LogFortianalyzer2Setting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzer2_setting#interface LogFortianalyzer2Setting#interface}
  */
  readonly interface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzer2_setting#interface_select_method LogFortianalyzer2Setting#interface_select_method}
  */
  readonly interfaceSelectMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzer2_setting#ips_archive LogFortianalyzer2Setting#ips_archive}
  */
  readonly ipsArchive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzer2_setting#max_log_rate LogFortianalyzer2Setting#max_log_rate}
  */
  readonly maxLogRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzer2_setting#monitor_failure_retry_period LogFortianalyzer2Setting#monitor_failure_retry_period}
  */
  readonly monitorFailureRetryPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzer2_setting#monitor_keepalive_period LogFortianalyzer2Setting#monitor_keepalive_period}
  */
  readonly monitorKeepalivePeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzer2_setting#preshared_key LogFortianalyzer2Setting#preshared_key}
  */
  readonly presharedKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzer2_setting#priority LogFortianalyzer2Setting#priority}
  */
  readonly priority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzer2_setting#reliable LogFortianalyzer2Setting#reliable}
  */
  readonly reliable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzer2_setting#serial LogFortianalyzer2Setting#serial}
  */
  readonly serial?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzer2_setting#server LogFortianalyzer2Setting#server}
  */
  readonly server?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzer2_setting#server_cert_ca LogFortianalyzer2Setting#server_cert_ca}
  */
  readonly serverCertCa?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzer2_setting#source_ip LogFortianalyzer2Setting#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzer2_setting#ssl_min_proto_version LogFortianalyzer2Setting#ssl_min_proto_version}
  */
  readonly sslMinProtoVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzer2_setting#status LogFortianalyzer2Setting#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzer2_setting#upload_day LogFortianalyzer2Setting#upload_day}
  */
  readonly uploadDay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzer2_setting#upload_interval LogFortianalyzer2Setting#upload_interval}
  */
  readonly uploadInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzer2_setting#upload_option LogFortianalyzer2Setting#upload_option}
  */
  readonly uploadOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzer2_setting#upload_time LogFortianalyzer2Setting#upload_time}
  */
  readonly uploadTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzer2_setting#vrf_select LogFortianalyzer2Setting#vrf_select}
  */
  readonly vrfSelect?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzer2_setting fmgdevice_log_fortianalyzer2_setting}
*/
export class LogFortianalyzer2Setting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_log_fortianalyzer2_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogFortianalyzer2Setting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogFortianalyzer2Setting to import
  * @param importFromId The id of the existing LogFortianalyzer2Setting that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzer2_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogFortianalyzer2Setting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_log_fortianalyzer2_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/log_fortianalyzer2_setting fmgdevice_log_fortianalyzer2_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogFortianalyzer2SettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LogFortianalyzer2SettingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_log_fortianalyzer2_setting',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._changeIp = config.changeIp;
    this._accessConfig = config.accessConfig;
    this._altServer = config.altServer;
    this._certificate = config.certificate;
    this._certificateVerification = config.certificateVerification;
    this._connTimeout = config.connTimeout;
    this._deviceName = config.deviceName;
    this._encAlgorithm = config.encAlgorithm;
    this._fallbackToPrimary = config.fallbackToPrimary;
    this._hmacAlgorithm = config.hmacAlgorithm;
    this._id = config.id;
    this._interface = config.interface;
    this._interfaceSelectMethod = config.interfaceSelectMethod;
    this._ipsArchive = config.ipsArchive;
    this._maxLogRate = config.maxLogRate;
    this._monitorFailureRetryPeriod = config.monitorFailureRetryPeriod;
    this._monitorKeepalivePeriod = config.monitorKeepalivePeriod;
    this._presharedKey = config.presharedKey;
    this._priority = config.priority;
    this._reliable = config.reliable;
    this._serial = config.serial;
    this._server = config.server;
    this._serverCertCa = config.serverCertCa;
    this._sourceIp = config.sourceIp;
    this._sslMinProtoVersion = config.sslMinProtoVersion;
    this._status = config.status;
    this._uploadDay = config.uploadDay;
    this._uploadInterval = config.uploadInterval;
    this._uploadOption = config.uploadOption;
    this._uploadTime = config.uploadTime;
    this._vrfSelect = config.vrfSelect;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // __change_ip - computed: false, optional: true, required: false
  private _changeIp?: number; 
  public get changeIp() {
    return this.getNumberAttribute('__change_ip');
  }
  public set changeIp(value: number) {
    this._changeIp = value;
  }
  public resetChangeIp() {
    this._changeIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeIpInput() {
    return this._changeIp;
  }

  // access_config - computed: true, optional: true, required: false
  private _accessConfig?: string; 
  public get accessConfig() {
    return this.getStringAttribute('access_config');
  }
  public set accessConfig(value: string) {
    this._accessConfig = value;
  }
  public resetAccessConfig() {
    this._accessConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessConfigInput() {
    return this._accessConfig;
  }

  // alt_server - computed: false, optional: true, required: false
  private _altServer?: string; 
  public get altServer() {
    return this.getStringAttribute('alt_server');
  }
  public set altServer(value: string) {
    this._altServer = value;
  }
  public resetAltServer() {
    this._altServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get altServerInput() {
    return this._altServer;
  }

  // certificate - computed: true, optional: true, required: false
  private _certificate?: string[]; 
  public get certificate() {
    return cdktf.Fn.tolist(this.getListAttribute('certificate'));
  }
  public set certificate(value: string[]) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // certificate_verification - computed: true, optional: true, required: false
  private _certificateVerification?: string; 
  public get certificateVerification() {
    return this.getStringAttribute('certificate_verification');
  }
  public set certificateVerification(value: string) {
    this._certificateVerification = value;
  }
  public resetCertificateVerification() {
    this._certificateVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateVerificationInput() {
    return this._certificateVerification;
  }

  // conn_timeout - computed: false, optional: true, required: false
  private _connTimeout?: number; 
  public get connTimeout() {
    return this.getNumberAttribute('conn_timeout');
  }
  public set connTimeout(value: number) {
    this._connTimeout = value;
  }
  public resetConnTimeout() {
    this._connTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connTimeoutInput() {
    return this._connTimeout;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // enc_algorithm - computed: false, optional: true, required: false
  private _encAlgorithm?: string; 
  public get encAlgorithm() {
    return this.getStringAttribute('enc_algorithm');
  }
  public set encAlgorithm(value: string) {
    this._encAlgorithm = value;
  }
  public resetEncAlgorithm() {
    this._encAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encAlgorithmInput() {
    return this._encAlgorithm;
  }

  // fallback_to_primary - computed: false, optional: true, required: false
  private _fallbackToPrimary?: string; 
  public get fallbackToPrimary() {
    return this.getStringAttribute('fallback_to_primary');
  }
  public set fallbackToPrimary(value: string) {
    this._fallbackToPrimary = value;
  }
  public resetFallbackToPrimary() {
    this._fallbackToPrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackToPrimaryInput() {
    return this._fallbackToPrimary;
  }

  // hmac_algorithm - computed: true, optional: true, required: false
  private _hmacAlgorithm?: string; 
  public get hmacAlgorithm() {
    return this.getStringAttribute('hmac_algorithm');
  }
  public set hmacAlgorithm(value: string) {
    this._hmacAlgorithm = value;
  }
  public resetHmacAlgorithm() {
    this._hmacAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hmacAlgorithmInput() {
    return this._hmacAlgorithm;
  }

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

  // interface - computed: true, optional: true, required: false
  private _interface?: string[]; 
  public get interface() {
    return cdktf.Fn.tolist(this.getListAttribute('interface'));
  }
  public set interface(value: string[]) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // interface_select_method - computed: false, optional: true, required: false
  private _interfaceSelectMethod?: string; 
  public get interfaceSelectMethod() {
    return this.getStringAttribute('interface_select_method');
  }
  public set interfaceSelectMethod(value: string) {
    this._interfaceSelectMethod = value;
  }
  public resetInterfaceSelectMethod() {
    this._interfaceSelectMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceSelectMethodInput() {
    return this._interfaceSelectMethod;
  }

  // ips_archive - computed: false, optional: true, required: false
  private _ipsArchive?: string; 
  public get ipsArchive() {
    return this.getStringAttribute('ips_archive');
  }
  public set ipsArchive(value: string) {
    this._ipsArchive = value;
  }
  public resetIpsArchive() {
    this._ipsArchive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsArchiveInput() {
    return this._ipsArchive;
  }

  // max_log_rate - computed: false, optional: true, required: false
  private _maxLogRate?: number; 
  public get maxLogRate() {
    return this.getNumberAttribute('max_log_rate');
  }
  public set maxLogRate(value: number) {
    this._maxLogRate = value;
  }
  public resetMaxLogRate() {
    this._maxLogRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLogRateInput() {
    return this._maxLogRate;
  }

  // monitor_failure_retry_period - computed: false, optional: true, required: false
  private _monitorFailureRetryPeriod?: number; 
  public get monitorFailureRetryPeriod() {
    return this.getNumberAttribute('monitor_failure_retry_period');
  }
  public set monitorFailureRetryPeriod(value: number) {
    this._monitorFailureRetryPeriod = value;
  }
  public resetMonitorFailureRetryPeriod() {
    this._monitorFailureRetryPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorFailureRetryPeriodInput() {
    return this._monitorFailureRetryPeriod;
  }

  // monitor_keepalive_period - computed: false, optional: true, required: false
  private _monitorKeepalivePeriod?: number; 
  public get monitorKeepalivePeriod() {
    return this.getNumberAttribute('monitor_keepalive_period');
  }
  public set monitorKeepalivePeriod(value: number) {
    this._monitorKeepalivePeriod = value;
  }
  public resetMonitorKeepalivePeriod() {
    this._monitorKeepalivePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorKeepalivePeriodInput() {
    return this._monitorKeepalivePeriod;
  }

  // preshared_key - computed: false, optional: true, required: false
  private _presharedKey?: string; 
  public get presharedKey() {
    return this.getStringAttribute('preshared_key');
  }
  public set presharedKey(value: string) {
    this._presharedKey = value;
  }
  public resetPresharedKey() {
    this._presharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presharedKeyInput() {
    return this._presharedKey;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // reliable - computed: false, optional: true, required: false
  private _reliable?: string; 
  public get reliable() {
    return this.getStringAttribute('reliable');
  }
  public set reliable(value: string) {
    this._reliable = value;
  }
  public resetReliable() {
    this._reliable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reliableInput() {
    return this._reliable;
  }

  // serial - computed: true, optional: true, required: false
  private _serial?: string[]; 
  public get serial() {
    return cdktf.Fn.tolist(this.getListAttribute('serial'));
  }
  public set serial(value: string[]) {
    this._serial = value;
  }
  public resetSerial() {
    this._serial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInput() {
    return this._serial;
  }

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // server_cert_ca - computed: true, optional: true, required: false
  private _serverCertCa?: string[]; 
  public get serverCertCa() {
    return cdktf.Fn.tolist(this.getListAttribute('server_cert_ca'));
  }
  public set serverCertCa(value: string[]) {
    this._serverCertCa = value;
  }
  public resetServerCertCa() {
    this._serverCertCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertCaInput() {
    return this._serverCertCa;
  }

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // ssl_min_proto_version - computed: true, optional: true, required: false
  private _sslMinProtoVersion?: string; 
  public get sslMinProtoVersion() {
    return this.getStringAttribute('ssl_min_proto_version');
  }
  public set sslMinProtoVersion(value: string) {
    this._sslMinProtoVersion = value;
  }
  public resetSslMinProtoVersion() {
    this._sslMinProtoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslMinProtoVersionInput() {
    return this._sslMinProtoVersion;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // upload_day - computed: false, optional: true, required: false
  private _uploadDay?: string; 
  public get uploadDay() {
    return this.getStringAttribute('upload_day');
  }
  public set uploadDay(value: string) {
    this._uploadDay = value;
  }
  public resetUploadDay() {
    this._uploadDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadDayInput() {
    return this._uploadDay;
  }

  // upload_interval - computed: false, optional: true, required: false
  private _uploadInterval?: string; 
  public get uploadInterval() {
    return this.getStringAttribute('upload_interval');
  }
  public set uploadInterval(value: string) {
    this._uploadInterval = value;
  }
  public resetUploadInterval() {
    this._uploadInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadIntervalInput() {
    return this._uploadInterval;
  }

  // upload_option - computed: false, optional: true, required: false
  private _uploadOption?: string; 
  public get uploadOption() {
    return this.getStringAttribute('upload_option');
  }
  public set uploadOption(value: string) {
    this._uploadOption = value;
  }
  public resetUploadOption() {
    this._uploadOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadOptionInput() {
    return this._uploadOption;
  }

  // upload_time - computed: false, optional: true, required: false
  private _uploadTime?: string; 
  public get uploadTime() {
    return this.getStringAttribute('upload_time');
  }
  public set uploadTime(value: string) {
    this._uploadTime = value;
  }
  public resetUploadTime() {
    this._uploadTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadTimeInput() {
    return this._uploadTime;
  }

  // vrf_select - computed: false, optional: true, required: false
  private _vrfSelect?: number; 
  public get vrfSelect() {
    return this.getNumberAttribute('vrf_select');
  }
  public set vrfSelect(value: number) {
    this._vrfSelect = value;
  }
  public resetVrfSelect() {
    this._vrfSelect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfSelectInput() {
    return this._vrfSelect;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      __change_ip: cdktf.numberToTerraform(this._changeIp),
      access_config: cdktf.stringToTerraform(this._accessConfig),
      alt_server: cdktf.stringToTerraform(this._altServer),
      certificate: cdktf.listMapper(cdktf.stringToTerraform, false)(this._certificate),
      certificate_verification: cdktf.stringToTerraform(this._certificateVerification),
      conn_timeout: cdktf.numberToTerraform(this._connTimeout),
      device_name: cdktf.stringToTerraform(this._deviceName),
      enc_algorithm: cdktf.stringToTerraform(this._encAlgorithm),
      fallback_to_primary: cdktf.stringToTerraform(this._fallbackToPrimary),
      hmac_algorithm: cdktf.stringToTerraform(this._hmacAlgorithm),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._interface),
      interface_select_method: cdktf.stringToTerraform(this._interfaceSelectMethod),
      ips_archive: cdktf.stringToTerraform(this._ipsArchive),
      max_log_rate: cdktf.numberToTerraform(this._maxLogRate),
      monitor_failure_retry_period: cdktf.numberToTerraform(this._monitorFailureRetryPeriod),
      monitor_keepalive_period: cdktf.numberToTerraform(this._monitorKeepalivePeriod),
      preshared_key: cdktf.stringToTerraform(this._presharedKey),
      priority: cdktf.stringToTerraform(this._priority),
      reliable: cdktf.stringToTerraform(this._reliable),
      serial: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serial),
      server: cdktf.stringToTerraform(this._server),
      server_cert_ca: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serverCertCa),
      source_ip: cdktf.stringToTerraform(this._sourceIp),
      ssl_min_proto_version: cdktf.stringToTerraform(this._sslMinProtoVersion),
      status: cdktf.stringToTerraform(this._status),
      upload_day: cdktf.stringToTerraform(this._uploadDay),
      upload_interval: cdktf.stringToTerraform(this._uploadInterval),
      upload_option: cdktf.stringToTerraform(this._uploadOption),
      upload_time: cdktf.stringToTerraform(this._uploadTime),
      vrf_select: cdktf.numberToTerraform(this._vrfSelect),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      __change_ip: {
        value: cdktf.numberToHclTerraform(this._changeIp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      access_config: {
        value: cdktf.stringToHclTerraform(this._accessConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alt_server: {
        value: cdktf.stringToHclTerraform(this._altServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._certificate),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      certificate_verification: {
        value: cdktf.stringToHclTerraform(this._certificateVerification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conn_timeout: {
        value: cdktf.numberToHclTerraform(this._connTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enc_algorithm: {
        value: cdktf.stringToHclTerraform(this._encAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fallback_to_primary: {
        value: cdktf.stringToHclTerraform(this._fallbackToPrimary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hmac_algorithm: {
        value: cdktf.stringToHclTerraform(this._hmacAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._interface),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      interface_select_method: {
        value: cdktf.stringToHclTerraform(this._interfaceSelectMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ips_archive: {
        value: cdktf.stringToHclTerraform(this._ipsArchive),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_log_rate: {
        value: cdktf.numberToHclTerraform(this._maxLogRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      monitor_failure_retry_period: {
        value: cdktf.numberToHclTerraform(this._monitorFailureRetryPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      monitor_keepalive_period: {
        value: cdktf.numberToHclTerraform(this._monitorKeepalivePeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      preshared_key: {
        value: cdktf.stringToHclTerraform(this._presharedKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.stringToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reliable: {
        value: cdktf.stringToHclTerraform(this._reliable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serial: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serial),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      server: {
        value: cdktf.stringToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_cert_ca: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serverCertCa),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      source_ip: {
        value: cdktf.stringToHclTerraform(this._sourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_min_proto_version: {
        value: cdktf.stringToHclTerraform(this._sslMinProtoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upload_day: {
        value: cdktf.stringToHclTerraform(this._uploadDay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upload_interval: {
        value: cdktf.stringToHclTerraform(this._uploadInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upload_option: {
        value: cdktf.stringToHclTerraform(this._uploadOption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upload_time: {
        value: cdktf.stringToHclTerraform(this._uploadTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf_select: {
        value: cdktf.numberToHclTerraform(this._vrfSelect),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
