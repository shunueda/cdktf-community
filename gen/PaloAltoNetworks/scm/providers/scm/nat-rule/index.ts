// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/resources/nat_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NatRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Active active device binding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/resources/nat_rule#active_active_device_binding NatRule#active_active_device_binding}
  */
  readonly activeActiveDeviceBinding?: string;
  /**
  * NAT rule description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/resources/nat_rule#description NatRule#description}
  */
  readonly description?: string;
  /**
  * Destination address(es) of the original packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/resources/nat_rule#destination NatRule#destination}
  */
  readonly destination: string[];
  /**
  * The device in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/resources/nat_rule#device NatRule#device}
  */
  readonly device?: string;
  /**
  * Disable NAT rule?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/resources/nat_rule#disabled NatRule#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Distribution method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/resources/nat_rule#distribution NatRule#distribution}
  */
  readonly distribution?: string;
  /**
  * DNS rewrite
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/resources/nat_rule#dns_rewrite NatRule#dns_rewrite}
  */
  readonly dnsRewrite?: NatRuleDnsRewrite;
  /**
  * The folder in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/resources/nat_rule#folder NatRule#folder}
  */
  readonly folder?: string;
  /**
  * Source zone(s) of the original packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/resources/nat_rule#from NatRule#from}
  */
  readonly from: string[];
  /**
  * NAT rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/resources/nat_rule#name NatRule#name}
  */
  readonly name: string;
  /**
  * NAT type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/resources/nat_rule#nat_type NatRule#nat_type}
  */
  readonly natType?: string;
  /**
  * The relative position of the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/resources/nat_rule#position NatRule#position}
  */
  readonly position?: string;
  /**
  * The service of the original packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/resources/nat_rule#service NatRule#service}
  */
  readonly service: string;
  /**
  * The snippet in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/resources/nat_rule#snippet NatRule#snippet}
  */
  readonly snippet?: string;
  /**
  * Source address(es) of the original packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/resources/nat_rule#source NatRule#source}
  */
  readonly source: string[];
  /**
  * Source translation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/resources/nat_rule#source_translation NatRule#source_translation}
  */
  readonly sourceTranslation?: NatRuleSourceTranslation;
  /**
  * NAT rule tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/resources/nat_rule#tag NatRule#tag}
  */
  readonly tag?: string[];
  /**
  * Destination zone of the original packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/resources/nat_rule#to NatRule#to}
  */
  readonly to: string[];
  /**
  * Destination interface of the original packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/resources/nat_rule#to_interface NatRule#to_interface}
  */
  readonly toInterface?: string;
  /**
  * Translated destination IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/resources/nat_rule#translated_address_single NatRule#translated_address_single}
  */
  readonly translatedAddressSingle?: string;
  /**
  * Translated destination port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/resources/nat_rule#translated_port NatRule#translated_port}
  */
  readonly translatedPort?: number;
}
export interface NatRuleDnsRewrite {
  /**
  * Direction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/resources/nat_rule#direction NatRule#direction}
  */
  readonly direction?: string;
}

export function natRuleDnsRewriteToTerraform(struct?: NatRuleDnsRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
  }
}


export function natRuleDnsRewriteToHclTerraform(struct?: NatRuleDnsRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NatRuleDnsRewriteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NatRuleDnsRewrite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NatRuleDnsRewrite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direction = value.direction;
    }
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }
}
export interface NatRuleSourceTranslationFallback {
  /**
  * Interface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/resources/nat_rule#interface NatRule#interface}
  */
  readonly interface?: string;
}

export function natRuleSourceTranslationFallbackToTerraform(struct?: NatRuleSourceTranslationFallback | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface: cdktf.stringToTerraform(struct!.interface),
  }
}


export function natRuleSourceTranslationFallbackToHclTerraform(struct?: NatRuleSourceTranslationFallback | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NatRuleSourceTranslationFallbackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NatRuleSourceTranslationFallback | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NatRuleSourceTranslationFallback | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interface = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interface = value.interface;
    }
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }
}
export interface NatRuleSourceTranslation {
  /**
  * Bi directional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/resources/nat_rule#bi_directional NatRule#bi_directional}
  */
  readonly biDirectional?: boolean | cdktf.IResolvable;
  /**
  * Fallback
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/resources/nat_rule#fallback NatRule#fallback}
  */
  readonly fallback?: NatRuleSourceTranslationFallback;
  /**
  * Interface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/resources/nat_rule#interface NatRule#interface}
  */
  readonly interface?: string;
  /**
  * Translated IP addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/resources/nat_rule#translated_address_array NatRule#translated_address_array}
  */
  readonly translatedAddressArray?: string[];
  /**
  * Translated IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/resources/nat_rule#translated_address_single NatRule#translated_address_single}
  */
  readonly translatedAddressSingle?: string;
}

export function natRuleSourceTranslationToTerraform(struct?: NatRuleSourceTranslation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bi_directional: cdktf.booleanToTerraform(struct!.biDirectional),
    fallback: natRuleSourceTranslationFallbackToTerraform(struct!.fallback),
    interface: cdktf.stringToTerraform(struct!.interface),
    translated_address_array: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.translatedAddressArray),
    translated_address_single: cdktf.stringToTerraform(struct!.translatedAddressSingle),
  }
}


export function natRuleSourceTranslationToHclTerraform(struct?: NatRuleSourceTranslation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bi_directional: {
      value: cdktf.booleanToHclTerraform(struct!.biDirectional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fallback: {
      value: natRuleSourceTranslationFallbackToHclTerraform(struct!.fallback),
      isBlock: true,
      type: "struct",
      storageClassType: "NatRuleSourceTranslationFallback",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    translated_address_array: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.translatedAddressArray),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    translated_address_single: {
      value: cdktf.stringToHclTerraform(struct!.translatedAddressSingle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NatRuleSourceTranslationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NatRuleSourceTranslation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._biDirectional !== undefined) {
      hasAnyValues = true;
      internalValueResult.biDirectional = this._biDirectional;
    }
    if (this._fallback?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallback = this._fallback?.internalValue;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._translatedAddressArray !== undefined) {
      hasAnyValues = true;
      internalValueResult.translatedAddressArray = this._translatedAddressArray;
    }
    if (this._translatedAddressSingle !== undefined) {
      hasAnyValues = true;
      internalValueResult.translatedAddressSingle = this._translatedAddressSingle;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NatRuleSourceTranslation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._biDirectional = undefined;
      this._fallback.internalValue = undefined;
      this._interface = undefined;
      this._translatedAddressArray = undefined;
      this._translatedAddressSingle = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._biDirectional = value.biDirectional;
      this._fallback.internalValue = value.fallback;
      this._interface = value.interface;
      this._translatedAddressArray = value.translatedAddressArray;
      this._translatedAddressSingle = value.translatedAddressSingle;
    }
  }

  // bi_directional - computed: false, optional: true, required: false
  private _biDirectional?: boolean | cdktf.IResolvable; 
  public get biDirectional() {
    return this.getBooleanAttribute('bi_directional');
  }
  public set biDirectional(value: boolean | cdktf.IResolvable) {
    this._biDirectional = value;
  }
  public resetBiDirectional() {
    this._biDirectional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get biDirectionalInput() {
    return this._biDirectional;
  }

  // fallback - computed: false, optional: true, required: false
  private _fallback = new NatRuleSourceTranslationFallbackOutputReference(this, "fallback");
  public get fallback() {
    return this._fallback;
  }
  public putFallback(value: NatRuleSourceTranslationFallback) {
    this._fallback.internalValue = value;
  }
  public resetFallback() {
    this._fallback.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackInput() {
    return this._fallback.internalValue;
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // translated_address_array - computed: false, optional: true, required: false
  private _translatedAddressArray?: string[]; 
  public get translatedAddressArray() {
    return this.getListAttribute('translated_address_array');
  }
  public set translatedAddressArray(value: string[]) {
    this._translatedAddressArray = value;
  }
  public resetTranslatedAddressArray() {
    this._translatedAddressArray = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedAddressArrayInput() {
    return this._translatedAddressArray;
  }

  // translated_address_single - computed: false, optional: true, required: false
  private _translatedAddressSingle?: string; 
  public get translatedAddressSingle() {
    return this.getStringAttribute('translated_address_single');
  }
  public set translatedAddressSingle(value: string) {
    this._translatedAddressSingle = value;
  }
  public resetTranslatedAddressSingle() {
    this._translatedAddressSingle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedAddressSingleInput() {
    return this._translatedAddressSingle;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/resources/nat_rule scm_nat_rule}
*/
export class NatRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_nat_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NatRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NatRule to import
  * @param importFromId The id of the existing NatRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/resources/nat_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NatRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_nat_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.2/docs/resources/nat_rule scm_nat_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NatRuleConfig
  */
  public constructor(scope: Construct, id: string, config: NatRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_nat_rule',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activeActiveDeviceBinding = config.activeActiveDeviceBinding;
    this._description = config.description;
    this._destination = config.destination;
    this._device = config.device;
    this._disabled = config.disabled;
    this._distribution = config.distribution;
    this._dnsRewrite.internalValue = config.dnsRewrite;
    this._folder = config.folder;
    this._from = config.from;
    this._name = config.name;
    this._natType = config.natType;
    this._position = config.position;
    this._service = config.service;
    this._snippet = config.snippet;
    this._source = config.source;
    this._sourceTranslation.internalValue = config.sourceTranslation;
    this._tag = config.tag;
    this._to = config.to;
    this._toInterface = config.toInterface;
    this._translatedAddressSingle = config.translatedAddressSingle;
    this._translatedPort = config.translatedPort;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_active_device_binding - computed: false, optional: true, required: false
  private _activeActiveDeviceBinding?: string; 
  public get activeActiveDeviceBinding() {
    return this.getStringAttribute('active_active_device_binding');
  }
  public set activeActiveDeviceBinding(value: string) {
    this._activeActiveDeviceBinding = value;
  }
  public resetActiveActiveDeviceBinding() {
    this._activeActiveDeviceBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeActiveDeviceBindingInput() {
    return this._activeActiveDeviceBinding;
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

  // destination - computed: false, optional: false, required: true
  private _destination?: string[]; 
  public get destination() {
    return this.getListAttribute('destination');
  }
  public set destination(value: string[]) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // distribution - computed: false, optional: true, required: false
  private _distribution?: string; 
  public get distribution() {
    return this.getStringAttribute('distribution');
  }
  public set distribution(value: string) {
    this._distribution = value;
  }
  public resetDistribution() {
    this._distribution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionInput() {
    return this._distribution;
  }

  // dns_rewrite - computed: false, optional: true, required: false
  private _dnsRewrite = new NatRuleDnsRewriteOutputReference(this, "dns_rewrite");
  public get dnsRewrite() {
    return this._dnsRewrite;
  }
  public putDnsRewrite(value: NatRuleDnsRewrite) {
    this._dnsRewrite.internalValue = value;
  }
  public resetDnsRewrite() {
    this._dnsRewrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRewriteInput() {
    return this._dnsRewrite.internalValue;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // from - computed: false, optional: false, required: true
  private _from?: string[]; 
  public get from() {
    return this.getListAttribute('from');
  }
  public set from(value: string[]) {
    this._from = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // nat_type - computed: true, optional: true, required: false
  private _natType?: string; 
  public get natType() {
    return this.getStringAttribute('nat_type');
  }
  public set natType(value: string) {
    this._natType = value;
  }
  public resetNatType() {
    this._natType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natTypeInput() {
    return this._natType;
  }

  // position - computed: true, optional: true, required: false
  private _position?: string; 
  public get position() {
    return this.getStringAttribute('position');
  }
  public set position(value: string) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string[]; 
  public get source() {
    return this.getListAttribute('source');
  }
  public set source(value: string[]) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source_translation - computed: false, optional: true, required: false
  private _sourceTranslation = new NatRuleSourceTranslationOutputReference(this, "source_translation");
  public get sourceTranslation() {
    return this._sourceTranslation;
  }
  public putSourceTranslation(value: NatRuleSourceTranslation) {
    this._sourceTranslation.internalValue = value;
  }
  public resetSourceTranslation() {
    this._sourceTranslation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTranslationInput() {
    return this._sourceTranslation.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string[]; 
  public get tag() {
    return this.getListAttribute('tag');
  }
  public set tag(value: string[]) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // to - computed: false, optional: false, required: true
  private _to?: string[]; 
  public get to() {
    return this.getListAttribute('to');
  }
  public set to(value: string[]) {
    this._to = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }

  // to_interface - computed: false, optional: true, required: false
  private _toInterface?: string; 
  public get toInterface() {
    return this.getStringAttribute('to_interface');
  }
  public set toInterface(value: string) {
    this._toInterface = value;
  }
  public resetToInterface() {
    this._toInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInterfaceInput() {
    return this._toInterface;
  }

  // translated_address_single - computed: false, optional: true, required: false
  private _translatedAddressSingle?: string; 
  public get translatedAddressSingle() {
    return this.getStringAttribute('translated_address_single');
  }
  public set translatedAddressSingle(value: string) {
    this._translatedAddressSingle = value;
  }
  public resetTranslatedAddressSingle() {
    this._translatedAddressSingle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedAddressSingleInput() {
    return this._translatedAddressSingle;
  }

  // translated_port - computed: false, optional: true, required: false
  private _translatedPort?: number; 
  public get translatedPort() {
    return this.getNumberAttribute('translated_port');
  }
  public set translatedPort(value: number) {
    this._translatedPort = value;
  }
  public resetTranslatedPort() {
    this._translatedPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedPortInput() {
    return this._translatedPort;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active_active_device_binding: cdktf.stringToTerraform(this._activeActiveDeviceBinding),
      description: cdktf.stringToTerraform(this._description),
      destination: cdktf.listMapper(cdktf.stringToTerraform, false)(this._destination),
      device: cdktf.stringToTerraform(this._device),
      disabled: cdktf.booleanToTerraform(this._disabled),
      distribution: cdktf.stringToTerraform(this._distribution),
      dns_rewrite: natRuleDnsRewriteToTerraform(this._dnsRewrite.internalValue),
      folder: cdktf.stringToTerraform(this._folder),
      from: cdktf.listMapper(cdktf.stringToTerraform, false)(this._from),
      name: cdktf.stringToTerraform(this._name),
      nat_type: cdktf.stringToTerraform(this._natType),
      position: cdktf.stringToTerraform(this._position),
      service: cdktf.stringToTerraform(this._service),
      snippet: cdktf.stringToTerraform(this._snippet),
      source: cdktf.listMapper(cdktf.stringToTerraform, false)(this._source),
      source_translation: natRuleSourceTranslationToTerraform(this._sourceTranslation.internalValue),
      tag: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tag),
      to: cdktf.listMapper(cdktf.stringToTerraform, false)(this._to),
      to_interface: cdktf.stringToTerraform(this._toInterface),
      translated_address_single: cdktf.stringToTerraform(this._translatedAddressSingle),
      translated_port: cdktf.numberToTerraform(this._translatedPort),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active_active_device_binding: {
        value: cdktf.stringToHclTerraform(this._activeActiveDeviceBinding),
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
      destination: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._destination),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      distribution: {
        value: cdktf.stringToHclTerraform(this._distribution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_rewrite: {
        value: natRuleDnsRewriteToHclTerraform(this._dnsRewrite.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NatRuleDnsRewrite",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      from: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._from),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_type: {
        value: cdktf.stringToHclTerraform(this._natType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      position: {
        value: cdktf.stringToHclTerraform(this._position),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service: {
        value: cdktf.stringToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._source),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      source_translation: {
        value: natRuleSourceTranslationToHclTerraform(this._sourceTranslation.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NatRuleSourceTranslation",
      },
      tag: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tag),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      to: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._to),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      to_interface: {
        value: cdktf.stringToHclTerraform(this._toInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      translated_address_single: {
        value: cdktf.stringToHclTerraform(this._translatedAddressSingle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      translated_port: {
        value: cdktf.numberToHclTerraform(this._translatedPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
