// https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/lb_listener_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbListenerV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/lb_listener_v2#admin_state_up LbListenerV2#admin_state_up}
  */
  readonly adminStateUp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/lb_listener_v2#allowed_cidrs LbListenerV2#allowed_cidrs}
  */
  readonly allowedCidrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/lb_listener_v2#alpn_protocols LbListenerV2#alpn_protocols}
  */
  readonly alpnProtocols?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/lb_listener_v2#client_authentication LbListenerV2#client_authentication}
  */
  readonly clientAuthentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/lb_listener_v2#client_ca_tls_container_ref LbListenerV2#client_ca_tls_container_ref}
  */
  readonly clientCaTlsContainerRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/lb_listener_v2#client_crl_container_ref LbListenerV2#client_crl_container_ref}
  */
  readonly clientCrlContainerRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/lb_listener_v2#connection_limit LbListenerV2#connection_limit}
  */
  readonly connectionLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/lb_listener_v2#default_pool_id LbListenerV2#default_pool_id}
  */
  readonly defaultPoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/lb_listener_v2#default_tls_container_ref LbListenerV2#default_tls_container_ref}
  */
  readonly defaultTlsContainerRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/lb_listener_v2#description LbListenerV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/lb_listener_v2#hsts_include_subdomains LbListenerV2#hsts_include_subdomains}
  */
  readonly hstsIncludeSubdomains?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/lb_listener_v2#hsts_max_age LbListenerV2#hsts_max_age}
  */
  readonly hstsMaxAge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/lb_listener_v2#hsts_preload LbListenerV2#hsts_preload}
  */
  readonly hstsPreload?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/lb_listener_v2#id LbListenerV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/lb_listener_v2#insert_headers LbListenerV2#insert_headers}
  */
  readonly insertHeaders?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/lb_listener_v2#loadbalancer_id LbListenerV2#loadbalancer_id}
  */
  readonly loadbalancerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/lb_listener_v2#name LbListenerV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/lb_listener_v2#protocol LbListenerV2#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/lb_listener_v2#protocol_port LbListenerV2#protocol_port}
  */
  readonly protocolPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/lb_listener_v2#region LbListenerV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/lb_listener_v2#sni_container_refs LbListenerV2#sni_container_refs}
  */
  readonly sniContainerRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/lb_listener_v2#tags LbListenerV2#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/lb_listener_v2#tenant_id LbListenerV2#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/lb_listener_v2#timeout_client_data LbListenerV2#timeout_client_data}
  */
  readonly timeoutClientData?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/lb_listener_v2#timeout_member_connect LbListenerV2#timeout_member_connect}
  */
  readonly timeoutMemberConnect?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/lb_listener_v2#timeout_member_data LbListenerV2#timeout_member_data}
  */
  readonly timeoutMemberData?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/lb_listener_v2#timeout_tcp_inspect LbListenerV2#timeout_tcp_inspect}
  */
  readonly timeoutTcpInspect?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/lb_listener_v2#tls_ciphers LbListenerV2#tls_ciphers}
  */
  readonly tlsCiphers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/lb_listener_v2#tls_versions LbListenerV2#tls_versions}
  */
  readonly tlsVersions?: string[];
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/lb_listener_v2#timeouts LbListenerV2#timeouts}
  */
  readonly timeouts?: LbListenerV2Timeouts;
}
export interface LbListenerV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/lb_listener_v2#create LbListenerV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/lb_listener_v2#delete LbListenerV2#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/lb_listener_v2#update LbListenerV2#update}
  */
  readonly update?: string;
}

export function lbListenerV2TimeoutsToTerraform(struct?: LbListenerV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function lbListenerV2TimeoutsToHclTerraform(struct?: LbListenerV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbListenerV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LbListenerV2Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbListenerV2Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/lb_listener_v2 openstack_lb_listener_v2}
*/
export class LbListenerV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openstack_lb_listener_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LbListenerV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LbListenerV2 to import
  * @param importFromId The id of the existing LbListenerV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/lb_listener_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LbListenerV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openstack_lb_listener_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/lb_listener_v2 openstack_lb_listener_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbListenerV2Config
  */
  public constructor(scope: Construct, id: string, config: LbListenerV2Config) {
    super(scope, id, {
      terraformResourceType: 'openstack_lb_listener_v2',
      terraformGeneratorMetadata: {
        providerName: 'openstack',
        providerVersion: '3.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminStateUp = config.adminStateUp;
    this._allowedCidrs = config.allowedCidrs;
    this._alpnProtocols = config.alpnProtocols;
    this._clientAuthentication = config.clientAuthentication;
    this._clientCaTlsContainerRef = config.clientCaTlsContainerRef;
    this._clientCrlContainerRef = config.clientCrlContainerRef;
    this._connectionLimit = config.connectionLimit;
    this._defaultPoolId = config.defaultPoolId;
    this._defaultTlsContainerRef = config.defaultTlsContainerRef;
    this._description = config.description;
    this._hstsIncludeSubdomains = config.hstsIncludeSubdomains;
    this._hstsMaxAge = config.hstsMaxAge;
    this._hstsPreload = config.hstsPreload;
    this._id = config.id;
    this._insertHeaders = config.insertHeaders;
    this._loadbalancerId = config.loadbalancerId;
    this._name = config.name;
    this._protocol = config.protocol;
    this._protocolPort = config.protocolPort;
    this._region = config.region;
    this._sniContainerRefs = config.sniContainerRefs;
    this._tags = config.tags;
    this._tenantId = config.tenantId;
    this._timeoutClientData = config.timeoutClientData;
    this._timeoutMemberConnect = config.timeoutMemberConnect;
    this._timeoutMemberData = config.timeoutMemberData;
    this._timeoutTcpInspect = config.timeoutTcpInspect;
    this._tlsCiphers = config.tlsCiphers;
    this._tlsVersions = config.tlsVersions;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_state_up - computed: false, optional: true, required: false
  private _adminStateUp?: boolean | cdktf.IResolvable; 
  public get adminStateUp() {
    return this.getBooleanAttribute('admin_state_up');
  }
  public set adminStateUp(value: boolean | cdktf.IResolvable) {
    this._adminStateUp = value;
  }
  public resetAdminStateUp() {
    this._adminStateUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStateUpInput() {
    return this._adminStateUp;
  }

  // allowed_cidrs - computed: false, optional: true, required: false
  private _allowedCidrs?: string[]; 
  public get allowedCidrs() {
    return this.getListAttribute('allowed_cidrs');
  }
  public set allowedCidrs(value: string[]) {
    this._allowedCidrs = value;
  }
  public resetAllowedCidrs() {
    this._allowedCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedCidrsInput() {
    return this._allowedCidrs;
  }

  // alpn_protocols - computed: true, optional: true, required: false
  private _alpnProtocols?: string[]; 
  public get alpnProtocols() {
    return cdktf.Fn.tolist(this.getListAttribute('alpn_protocols'));
  }
  public set alpnProtocols(value: string[]) {
    this._alpnProtocols = value;
  }
  public resetAlpnProtocols() {
    this._alpnProtocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alpnProtocolsInput() {
    return this._alpnProtocols;
  }

  // client_authentication - computed: false, optional: true, required: false
  private _clientAuthentication?: string; 
  public get clientAuthentication() {
    return this.getStringAttribute('client_authentication');
  }
  public set clientAuthentication(value: string) {
    this._clientAuthentication = value;
  }
  public resetClientAuthentication() {
    this._clientAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthenticationInput() {
    return this._clientAuthentication;
  }

  // client_ca_tls_container_ref - computed: false, optional: true, required: false
  private _clientCaTlsContainerRef?: string; 
  public get clientCaTlsContainerRef() {
    return this.getStringAttribute('client_ca_tls_container_ref');
  }
  public set clientCaTlsContainerRef(value: string) {
    this._clientCaTlsContainerRef = value;
  }
  public resetClientCaTlsContainerRef() {
    this._clientCaTlsContainerRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCaTlsContainerRefInput() {
    return this._clientCaTlsContainerRef;
  }

  // client_crl_container_ref - computed: false, optional: true, required: false
  private _clientCrlContainerRef?: string; 
  public get clientCrlContainerRef() {
    return this.getStringAttribute('client_crl_container_ref');
  }
  public set clientCrlContainerRef(value: string) {
    this._clientCrlContainerRef = value;
  }
  public resetClientCrlContainerRef() {
    this._clientCrlContainerRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCrlContainerRefInput() {
    return this._clientCrlContainerRef;
  }

  // connection_limit - computed: true, optional: true, required: false
  private _connectionLimit?: number; 
  public get connectionLimit() {
    return this.getNumberAttribute('connection_limit');
  }
  public set connectionLimit(value: number) {
    this._connectionLimit = value;
  }
  public resetConnectionLimit() {
    this._connectionLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionLimitInput() {
    return this._connectionLimit;
  }

  // default_pool_id - computed: true, optional: true, required: false
  private _defaultPoolId?: string; 
  public get defaultPoolId() {
    return this.getStringAttribute('default_pool_id');
  }
  public set defaultPoolId(value: string) {
    this._defaultPoolId = value;
  }
  public resetDefaultPoolId() {
    this._defaultPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPoolIdInput() {
    return this._defaultPoolId;
  }

  // default_tls_container_ref - computed: false, optional: true, required: false
  private _defaultTlsContainerRef?: string; 
  public get defaultTlsContainerRef() {
    return this.getStringAttribute('default_tls_container_ref');
  }
  public set defaultTlsContainerRef(value: string) {
    this._defaultTlsContainerRef = value;
  }
  public resetDefaultTlsContainerRef() {
    this._defaultTlsContainerRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTlsContainerRefInput() {
    return this._defaultTlsContainerRef;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // hsts_include_subdomains - computed: false, optional: true, required: false
  private _hstsIncludeSubdomains?: boolean | cdktf.IResolvable; 
  public get hstsIncludeSubdomains() {
    return this.getBooleanAttribute('hsts_include_subdomains');
  }
  public set hstsIncludeSubdomains(value: boolean | cdktf.IResolvable) {
    this._hstsIncludeSubdomains = value;
  }
  public resetHstsIncludeSubdomains() {
    this._hstsIncludeSubdomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hstsIncludeSubdomainsInput() {
    return this._hstsIncludeSubdomains;
  }

  // hsts_max_age - computed: false, optional: true, required: false
  private _hstsMaxAge?: number; 
  public get hstsMaxAge() {
    return this.getNumberAttribute('hsts_max_age');
  }
  public set hstsMaxAge(value: number) {
    this._hstsMaxAge = value;
  }
  public resetHstsMaxAge() {
    this._hstsMaxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hstsMaxAgeInput() {
    return this._hstsMaxAge;
  }

  // hsts_preload - computed: false, optional: true, required: false
  private _hstsPreload?: boolean | cdktf.IResolvable; 
  public get hstsPreload() {
    return this.getBooleanAttribute('hsts_preload');
  }
  public set hstsPreload(value: boolean | cdktf.IResolvable) {
    this._hstsPreload = value;
  }
  public resetHstsPreload() {
    this._hstsPreload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hstsPreloadInput() {
    return this._hstsPreload;
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

  // insert_headers - computed: false, optional: true, required: false
  private _insertHeaders?: { [key: string]: string }; 
  public get insertHeaders() {
    return this.getStringMapAttribute('insert_headers');
  }
  public set insertHeaders(value: { [key: string]: string }) {
    this._insertHeaders = value;
  }
  public resetInsertHeaders() {
    this._insertHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertHeadersInput() {
    return this._insertHeaders;
  }

  // loadbalancer_id - computed: false, optional: false, required: true
  private _loadbalancerId?: string; 
  public get loadbalancerId() {
    return this.getStringAttribute('loadbalancer_id');
  }
  public set loadbalancerId(value: string) {
    this._loadbalancerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadbalancerIdInput() {
    return this._loadbalancerId;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // protocol_port - computed: false, optional: false, required: true
  private _protocolPort?: number; 
  public get protocolPort() {
    return this.getNumberAttribute('protocol_port');
  }
  public set protocolPort(value: number) {
    this._protocolPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolPortInput() {
    return this._protocolPort;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // sni_container_refs - computed: false, optional: true, required: false
  private _sniContainerRefs?: string[]; 
  public get sniContainerRefs() {
    return this.getListAttribute('sni_container_refs');
  }
  public set sniContainerRefs(value: string[]) {
    this._sniContainerRefs = value;
  }
  public resetSniContainerRefs() {
    this._sniContainerRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniContainerRefsInput() {
    return this._sniContainerRefs;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // timeout_client_data - computed: true, optional: true, required: false
  private _timeoutClientData?: number; 
  public get timeoutClientData() {
    return this.getNumberAttribute('timeout_client_data');
  }
  public set timeoutClientData(value: number) {
    this._timeoutClientData = value;
  }
  public resetTimeoutClientData() {
    this._timeoutClientData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutClientDataInput() {
    return this._timeoutClientData;
  }

  // timeout_member_connect - computed: true, optional: true, required: false
  private _timeoutMemberConnect?: number; 
  public get timeoutMemberConnect() {
    return this.getNumberAttribute('timeout_member_connect');
  }
  public set timeoutMemberConnect(value: number) {
    this._timeoutMemberConnect = value;
  }
  public resetTimeoutMemberConnect() {
    this._timeoutMemberConnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMemberConnectInput() {
    return this._timeoutMemberConnect;
  }

  // timeout_member_data - computed: true, optional: true, required: false
  private _timeoutMemberData?: number; 
  public get timeoutMemberData() {
    return this.getNumberAttribute('timeout_member_data');
  }
  public set timeoutMemberData(value: number) {
    this._timeoutMemberData = value;
  }
  public resetTimeoutMemberData() {
    this._timeoutMemberData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMemberDataInput() {
    return this._timeoutMemberData;
  }

  // timeout_tcp_inspect - computed: true, optional: true, required: false
  private _timeoutTcpInspect?: number; 
  public get timeoutTcpInspect() {
    return this.getNumberAttribute('timeout_tcp_inspect');
  }
  public set timeoutTcpInspect(value: number) {
    this._timeoutTcpInspect = value;
  }
  public resetTimeoutTcpInspect() {
    this._timeoutTcpInspect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutTcpInspectInput() {
    return this._timeoutTcpInspect;
  }

  // tls_ciphers - computed: true, optional: true, required: false
  private _tlsCiphers?: string; 
  public get tlsCiphers() {
    return this.getStringAttribute('tls_ciphers');
  }
  public set tlsCiphers(value: string) {
    this._tlsCiphers = value;
  }
  public resetTlsCiphers() {
    this._tlsCiphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCiphersInput() {
    return this._tlsCiphers;
  }

  // tls_versions - computed: true, optional: true, required: false
  private _tlsVersions?: string[]; 
  public get tlsVersions() {
    return cdktf.Fn.tolist(this.getListAttribute('tls_versions'));
  }
  public set tlsVersions(value: string[]) {
    this._tlsVersions = value;
  }
  public resetTlsVersions() {
    this._tlsVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsVersionsInput() {
    return this._tlsVersions;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LbListenerV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LbListenerV2Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_state_up: cdktf.booleanToTerraform(this._adminStateUp),
      allowed_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedCidrs),
      alpn_protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alpnProtocols),
      client_authentication: cdktf.stringToTerraform(this._clientAuthentication),
      client_ca_tls_container_ref: cdktf.stringToTerraform(this._clientCaTlsContainerRef),
      client_crl_container_ref: cdktf.stringToTerraform(this._clientCrlContainerRef),
      connection_limit: cdktf.numberToTerraform(this._connectionLimit),
      default_pool_id: cdktf.stringToTerraform(this._defaultPoolId),
      default_tls_container_ref: cdktf.stringToTerraform(this._defaultTlsContainerRef),
      description: cdktf.stringToTerraform(this._description),
      hsts_include_subdomains: cdktf.booleanToTerraform(this._hstsIncludeSubdomains),
      hsts_max_age: cdktf.numberToTerraform(this._hstsMaxAge),
      hsts_preload: cdktf.booleanToTerraform(this._hstsPreload),
      id: cdktf.stringToTerraform(this._id),
      insert_headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._insertHeaders),
      loadbalancer_id: cdktf.stringToTerraform(this._loadbalancerId),
      name: cdktf.stringToTerraform(this._name),
      protocol: cdktf.stringToTerraform(this._protocol),
      protocol_port: cdktf.numberToTerraform(this._protocolPort),
      region: cdktf.stringToTerraform(this._region),
      sni_container_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sniContainerRefs),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      timeout_client_data: cdktf.numberToTerraform(this._timeoutClientData),
      timeout_member_connect: cdktf.numberToTerraform(this._timeoutMemberConnect),
      timeout_member_data: cdktf.numberToTerraform(this._timeoutMemberData),
      timeout_tcp_inspect: cdktf.numberToTerraform(this._timeoutTcpInspect),
      tls_ciphers: cdktf.stringToTerraform(this._tlsCiphers),
      tls_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tlsVersions),
      timeouts: lbListenerV2TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_state_up: {
        value: cdktf.booleanToHclTerraform(this._adminStateUp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allowed_cidrs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedCidrs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      alpn_protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._alpnProtocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      client_authentication: {
        value: cdktf.stringToHclTerraform(this._clientAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_ca_tls_container_ref: {
        value: cdktf.stringToHclTerraform(this._clientCaTlsContainerRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_crl_container_ref: {
        value: cdktf.stringToHclTerraform(this._clientCrlContainerRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_limit: {
        value: cdktf.numberToHclTerraform(this._connectionLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_pool_id: {
        value: cdktf.stringToHclTerraform(this._defaultPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_tls_container_ref: {
        value: cdktf.stringToHclTerraform(this._defaultTlsContainerRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hsts_include_subdomains: {
        value: cdktf.booleanToHclTerraform(this._hstsIncludeSubdomains),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hsts_max_age: {
        value: cdktf.numberToHclTerraform(this._hstsMaxAge),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hsts_preload: {
        value: cdktf.booleanToHclTerraform(this._hstsPreload),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insert_headers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._insertHeaders),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      loadbalancer_id: {
        value: cdktf.stringToHclTerraform(this._loadbalancerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol_port: {
        value: cdktf.numberToHclTerraform(this._protocolPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sni_container_refs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sniContainerRefs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout_client_data: {
        value: cdktf.numberToHclTerraform(this._timeoutClientData),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout_member_connect: {
        value: cdktf.numberToHclTerraform(this._timeoutMemberConnect),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout_member_data: {
        value: cdktf.numberToHclTerraform(this._timeoutMemberData),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout_tcp_inspect: {
        value: cdktf.numberToHclTerraform(this._timeoutTcpInspect),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tls_ciphers: {
        value: cdktf.stringToHclTerraform(this._tlsCiphers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_versions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tlsVersions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      timeouts: {
        value: lbListenerV2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LbListenerV2Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
