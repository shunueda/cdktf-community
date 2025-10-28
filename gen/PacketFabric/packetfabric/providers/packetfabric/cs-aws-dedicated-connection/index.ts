// https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_dedicated_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CsAwsDedicatedConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The UUID for the billing account that should be billed. Can also be set with the PF_ACCOUNT_ID environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_dedicated_connection#account_uuid CsAwsDedicatedConnection#account_uuid}
  */
  readonly accountUuid: string;
  /**
  * Whether the port auto-negotiates or not. This is currently only possible with 1Gbps ports and the request will fail if specified with 10Gbps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_dedicated_connection#autoneg CsAwsDedicatedConnection#autoneg}
  */
  readonly autoneg: boolean | cdktf.IResolvable;
  /**
  * The region that the new connection will connect to.
  * 
  * 	Example: us-west-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_dedicated_connection#aws_region CsAwsDedicatedConnection#aws_region}
  */
  readonly awsRegion: string;
  /**
  * A brief description of this connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_dedicated_connection#description CsAwsDedicatedConnection#description}
  */
  readonly description: string;
  /**
  * Label value linked to an object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_dedicated_connection#labels CsAwsDedicatedConnection#labels}
  */
  readonly labels?: string[];
  /**
  * A base64 encoded string of a PDF of the LOA that AWS provided.
  * 
  * 	Example: SSBhbSBhIFBERg==
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_dedicated_connection#loa CsAwsDedicatedConnection#loa}
  */
  readonly loa?: string;
  /**
  * Purchase order number or identifier of a service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_dedicated_connection#po_number CsAwsDedicatedConnection#po_number}
  */
  readonly poNumber?: string;
  /**
  * The POP in which the dedicated port should be provisioned (the cloud on-ramp).
  * 
  * 	Example: DAL1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_dedicated_connection#pop CsAwsDedicatedConnection#pop}
  */
  readonly pop: string;
  /**
  * The service class for the given port, either long haul or metro. Specify metro if the cloud on-ramp (the `pop`) is in the same market as the source ports (the ports to which you will be building out virtual circuits).
  * 
  * 	Enum: ["longhaul","metro"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_dedicated_connection#service_class CsAwsDedicatedConnection#service_class}
  */
  readonly serviceClass: string;
  /**
  * Create the dedicated connection as a LAG interface. Defaults: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_dedicated_connection#should_create_lag CsAwsDedicatedConnection#should_create_lag}
  */
  readonly shouldCreateLag?: boolean | cdktf.IResolvable;
  /**
  * The desired capacity of the port.
  * 
  * 	Enum: ["1Gps", "10Gbps"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_dedicated_connection#speed CsAwsDedicatedConnection#speed}
  */
  readonly speed: string;
  /**
  * The billing term, in months, for this connection.
  * 
  * 	Enum: ["1", "12", "24", "36"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_dedicated_connection#subscription_term CsAwsDedicatedConnection#subscription_term}
  */
  readonly subscriptionTerm: number;
  /**
  * The desired availability zone of the connection.
  * 
  * 	Example: "A"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_dedicated_connection#zone CsAwsDedicatedConnection#zone}
  */
  readonly zone: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_dedicated_connection#timeouts CsAwsDedicatedConnection#timeouts}
  */
  readonly timeouts?: CsAwsDedicatedConnectionTimeouts;
}
export interface CsAwsDedicatedConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_dedicated_connection#create CsAwsDedicatedConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_dedicated_connection#delete CsAwsDedicatedConnection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_dedicated_connection#read CsAwsDedicatedConnection#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_dedicated_connection#update CsAwsDedicatedConnection#update}
  */
  readonly update?: string;
}

export function csAwsDedicatedConnectionTimeoutsToTerraform(struct?: CsAwsDedicatedConnectionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function csAwsDedicatedConnectionTimeoutsToHclTerraform(struct?: CsAwsDedicatedConnectionTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class CsAwsDedicatedConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CsAwsDedicatedConnectionTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsAwsDedicatedConnectionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
* Represents a {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_dedicated_connection packetfabric_cs_aws_dedicated_connection}
*/
export class CsAwsDedicatedConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "packetfabric_cs_aws_dedicated_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CsAwsDedicatedConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CsAwsDedicatedConnection to import
  * @param importFromId The id of the existing CsAwsDedicatedConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_dedicated_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CsAwsDedicatedConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "packetfabric_cs_aws_dedicated_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_dedicated_connection packetfabric_cs_aws_dedicated_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CsAwsDedicatedConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: CsAwsDedicatedConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'packetfabric_cs_aws_dedicated_connection',
      terraformGeneratorMetadata: {
        providerName: 'packetfabric',
        providerVersion: '1.9.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountUuid = config.accountUuid;
    this._autoneg = config.autoneg;
    this._awsRegion = config.awsRegion;
    this._description = config.description;
    this._labels = config.labels;
    this._loa = config.loa;
    this._poNumber = config.poNumber;
    this._pop = config.pop;
    this._serviceClass = config.serviceClass;
    this._shouldCreateLag = config.shouldCreateLag;
    this._speed = config.speed;
    this._subscriptionTerm = config.subscriptionTerm;
    this._zone = config.zone;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_uuid - computed: false, optional: false, required: true
  private _accountUuid?: string; 
  public get accountUuid() {
    return this.getStringAttribute('account_uuid');
  }
  public set accountUuid(value: string) {
    this._accountUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountUuidInput() {
    return this._accountUuid;
  }

  // autoneg - computed: false, optional: false, required: true
  private _autoneg?: boolean | cdktf.IResolvable; 
  public get autoneg() {
    return this.getBooleanAttribute('autoneg');
  }
  public set autoneg(value: boolean | cdktf.IResolvable) {
    this._autoneg = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autonegInput() {
    return this._autoneg;
  }

  // aws_region - computed: false, optional: false, required: true
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // etl - computed: true, optional: false, required: false
  public get etl() {
    return this.getNumberAttribute('etl');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return cdktf.Fn.tolist(this.getListAttribute('labels'));
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // loa - computed: false, optional: true, required: false
  private _loa?: string; 
  public get loa() {
    return this.getStringAttribute('loa');
  }
  public set loa(value: string) {
    this._loa = value;
  }
  public resetLoa() {
    this._loa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loaInput() {
    return this._loa;
  }

  // po_number - computed: false, optional: true, required: false
  private _poNumber?: string; 
  public get poNumber() {
    return this.getStringAttribute('po_number');
  }
  public set poNumber(value: string) {
    this._poNumber = value;
  }
  public resetPoNumber() {
    this._poNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poNumberInput() {
    return this._poNumber;
  }

  // pop - computed: false, optional: false, required: true
  private _pop?: string; 
  public get pop() {
    return this.getStringAttribute('pop');
  }
  public set pop(value: string) {
    this._pop = value;
  }
  // Temporarily expose input value. Use with caution.
  public get popInput() {
    return this._pop;
  }

  // service_class - computed: false, optional: false, required: true
  private _serviceClass?: string; 
  public get serviceClass() {
    return this.getStringAttribute('service_class');
  }
  public set serviceClass(value: string) {
    this._serviceClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceClassInput() {
    return this._serviceClass;
  }

  // should_create_lag - computed: false, optional: true, required: false
  private _shouldCreateLag?: boolean | cdktf.IResolvable; 
  public get shouldCreateLag() {
    return this.getBooleanAttribute('should_create_lag');
  }
  public set shouldCreateLag(value: boolean | cdktf.IResolvable) {
    this._shouldCreateLag = value;
  }
  public resetShouldCreateLag() {
    this._shouldCreateLag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldCreateLagInput() {
    return this._shouldCreateLag;
  }

  // speed - computed: false, optional: false, required: true
  private _speed?: string; 
  public get speed() {
    return this.getStringAttribute('speed');
  }
  public set speed(value: string) {
    this._speed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get speedInput() {
    return this._speed;
  }

  // subscription_term - computed: false, optional: false, required: true
  private _subscriptionTerm?: number; 
  public get subscriptionTerm() {
    return this.getNumberAttribute('subscription_term');
  }
  public set subscriptionTerm(value: number) {
    this._subscriptionTerm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionTermInput() {
    return this._subscriptionTerm;
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CsAwsDedicatedConnectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CsAwsDedicatedConnectionTimeouts) {
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
      account_uuid: cdktf.stringToTerraform(this._accountUuid),
      autoneg: cdktf.booleanToTerraform(this._autoneg),
      aws_region: cdktf.stringToTerraform(this._awsRegion),
      description: cdktf.stringToTerraform(this._description),
      labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labels),
      loa: cdktf.stringToTerraform(this._loa),
      po_number: cdktf.stringToTerraform(this._poNumber),
      pop: cdktf.stringToTerraform(this._pop),
      service_class: cdktf.stringToTerraform(this._serviceClass),
      should_create_lag: cdktf.booleanToTerraform(this._shouldCreateLag),
      speed: cdktf.stringToTerraform(this._speed),
      subscription_term: cdktf.numberToTerraform(this._subscriptionTerm),
      zone: cdktf.stringToTerraform(this._zone),
      timeouts: csAwsDedicatedConnectionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_uuid: {
        value: cdktf.stringToHclTerraform(this._accountUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      autoneg: {
        value: cdktf.booleanToHclTerraform(this._autoneg),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      aws_region: {
        value: cdktf.stringToHclTerraform(this._awsRegion),
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
      labels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._labels),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      loa: {
        value: cdktf.stringToHclTerraform(this._loa),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      po_number: {
        value: cdktf.stringToHclTerraform(this._poNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pop: {
        value: cdktf.stringToHclTerraform(this._pop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_class: {
        value: cdktf.stringToHclTerraform(this._serviceClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      should_create_lag: {
        value: cdktf.booleanToHclTerraform(this._shouldCreateLag),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      speed: {
        value: cdktf.stringToHclTerraform(this._speed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_term: {
        value: cdktf.numberToHclTerraform(this._subscriptionTerm),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: csAwsDedicatedConnectionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CsAwsDedicatedConnectionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
